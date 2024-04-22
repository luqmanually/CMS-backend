import express from 'express';
import router from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
};

//app.use(loggingMiddleware); to have the middleware enabled everywhere
app.use(router);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}.`)
});