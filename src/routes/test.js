import { Router } from 'express';

const router = Router();

router.get("/test", (req, res) => {
    console.log("test");
});

router.get("/test/:id", (req, res) => {
    console.log(`req: ${req.params.id}`);
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "Bad request, invalid ID. "})
    };
    res.status(201).send(req.params.id)
});

export default router;