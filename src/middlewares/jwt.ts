// @ts-ignore
import { JWTPayload } from "../features/auth/model.ts"
// @ts-ignore
import config from "../config.ts"

export async function createToken(payload: JWTPayload, key: string) {

}

export async function createRefreshToken(payload: JWTPayload) {
    return await createToken(payload, config.AUTH_PRIVATE_KEY)
}

export async function createAccessToken(payload: JWTPayload) {
    return await createToken(payload, config.AUTH_PRIVATE_KEY)
}