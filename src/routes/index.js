import { Router } from 'express'; import cors from 'cors'; import responseTime from 'response-time';
import testRouter from "./test.js";
import gpuRouter from "./gpu.js";
import { json } from 'express';

const router = Router()

const logRequestDetails = (req, res, next) => {
    const start = new Date();
    const { method, url, headers } = req;
    const senderAddress = headers['x-forwarded-for'] || req.connection.remoteAddress;
  
    res.once('finish', () => {
      const latency = new Date() - start;
      console.log(`Request from ${senderAddress} to ${method} ${url} took ${latency}ms`);
    });
  
    next();
  };

router.use(testRouter);
router.use(gpuRouter);
router.use(logRequestDetails)
router.use(cors());

// Main directory
router.get("/", (req, res) => {
    res.status(201).send({msg: "CMS server says Hello!"});
});

// Hello World
router.get("/helloworld", (req, res) => {
    res.status(201).send("Hello World")
});

export default router;