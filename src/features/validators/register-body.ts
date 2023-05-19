// import { ajv } from "../../services/ajv"

export interface registerBody {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    permission: string
}

// const registerSchema = {
//     type: "object",
//     properties: {
//         name: { type: "string" },
//         password: { type: "string" },
//     },
//     required: ["firstname", "password",],
//     additionalProperties: false,
// }

// export const registerValidate = ajv.compile(registerSchema)