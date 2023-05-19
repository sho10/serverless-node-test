// import { ajv } from "../../services/ajv"
// import { ExpressMiddlewareInterface, HttpCode } from 'routing-controllers';
// import { NextFunction } from 'express';

export interface loginBody {
    email: string,
    password: string,
}

// const loginSchema = {
//     type: "object",
//     properties: {
//         email: { type: "string" },
//         password: { type: "string" },
//     },
//     required: ["email", "password"],
//     additionalProperties: false,
// }

// const loginValidate = ajv.compile(loginSchema)

// export class loginHandler implements ExpressMiddlewareInterface {
//     use(request: any, response: any, next?: NextFunction): any {
//         const validate = loginValidate(request.body)
//         if (!validate) {
//             return response.status(200).send({ message: 'invalid validation' })
//         }
//     }
// }