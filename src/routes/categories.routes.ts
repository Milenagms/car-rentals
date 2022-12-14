import {request, response, Router} from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import {listCategoriesController} from '../modules/cars/useCases/ListCategories'
import { importCategoryController} from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()

const upload = multer({
    dest: './tmp'
})

const createCategoryController = new CreateCategoryController()

// @ts-ignore
categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request,response)
})

categoriesRoutes.post("/import", upload.single('file'), (request, response) => {
    return importCategoryController.handle(request, response)
})
export { categoriesRoutes }