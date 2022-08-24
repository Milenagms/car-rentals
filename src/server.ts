// @ts-ignore
import express, {request, response} from 'express'
import {categoriesRoutes} from './routes/categories.routes'

const app = express()
app.use(express.json())
app.use("/categories",categoriesRoutes)

app.get("/", (request, response) =>{
    return response.json({message: "ola Milena"})
})

app.listen(3333, () => console.log("Sever ok!!"))

