import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
    async handle(request: Request, response: Promise<Response>){
        const { name, description } = request.body

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

        await createCategoryUseCase.execute({name, description})

        return (await response).status(201).send()
    }
}

export { CreateCategoryController }