import express from 'express';
import router from "./routes/index.js"

const app = express();

const PORT = process.env.PORT || 3000;

const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
};

//app.use(loggingMiddleware); to have the middleware enabled everywhere
app.use(router)

app.get("/", (req, res) => {
    res.status(201).send({"how we doin": "server is fine :D"});
});

app.get("/helloworld", loggingMiddleware,(req, res) => {
    res.status(201).send("Hello World")
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`)
});