import dotenv from "dotenv"
import express from 'express';
import { getFormSubmissions } from './form';
import { getFilteredResponses } from "./filter";
 
const app: express.Application = express()
dotenv.config()
 
app.get('/', (req, res) => {
    res.json('ok');
})

app.get('/:formId/filteredResponses', async (req, res) => {
    const queries = req.query
    const filters = typeof req.query.filters === 'string' && req.query.filters !== '' ? JSON.parse(req.query.filters) : []
    const filteredResponses = await getFilteredResponses(
        await getFormSubmissions(req.params.formId, queries), 
        filters
    )

    res.json({
        responses: filteredResponses,
        totalResponses: filteredResponses.length,
        pageCount: 1
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})