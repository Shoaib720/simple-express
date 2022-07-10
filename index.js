import express, { json } from 'express';

const app = express();

app.use(express(json));

app.get('/', (req, res, _next) => {
    res.status(200).json({
        status: "200 OK",
        message: "App is running.",
        developer: "Shoaib S. Shaikh"
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
})