import {request, response, Router} from 'express'
import { SpecificationsRepository} from '../modules/cars/repositories/implementations/SpecificationsRepository'
import {createCategoryController} from '../modules/cars/useCases/createCategory'

const specificationsRoutes = Router()

specificationsRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)

})

export { specificationsRoutes }