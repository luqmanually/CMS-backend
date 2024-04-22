import { Router } from 'express';

const router = Router();

router.get("/gpu", (req, res) => {
    res.status(201).send({msg: "GPU directory of CMS backend"});
});

router.get("/gpu/:id", (req, res) => {
    res.status(201).send({msg: `${req.params.id}`})
});

export default router;