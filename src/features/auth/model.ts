// @ts-ignore
import config from "../../config.ts";
// @ts-ignore
import { registerBody } from "../validators/register-body.ts";
import bcrypt from "bcrypt"
// import { prisma } from '../../index'
import jwt from 'jsonwebtoken'
// @ts-ignore
import { loginBody } from "../validators/login-body.ts";
import { generateKeyPairSync } from 'crypto'
import axiosRetry from 'axios-retry'
import axios from 'axios'

export interface JWTPayload {
    firstName: string,
    lastName: string,
    permission: string
}


export async function createRegisterUser(body: registerBody) {
    const { firstName, lastName, email, password, permission } = body
    console.log(config.AUTH_PRIVATE_KEY)
    // Encrypt the password using bcrypt before storing in db
    // bcrypt.hash(password, config.SALT_ROUNDS, async function (err, hash) {
    //     try {
    // await prisma.customer.create({
    //     where: {
    //         firstName: firstName,
    //         lastName: lastName,
    //         password: password,
    //         email: email,
    //         permission: permission
    //     }
    // })
    //     } catch (err) {
    //         return err
    //     }

    // })

    const payload: JWTPayload = {
        firstName: firstName,
        lastName: lastName,
        permission: permission
    }
    // jwt.sign the create the jwt token payload (registerBody), algorithm RSA-256, AUTH_PRIVATE_KEY to create a signature
    const token = jwt.sign(payload, config.AUTH_PRIVATE_KEY, { algorithm: "RS256", expiresIn: '1hr' })


    // return the jwt token (refresh token and access token) in this request
    return token
}

export async function createLoginUser(body: loginBody) {
    const { email, password } = body
    // const customer = await prisma.customer.findUnique({
    //     where: {
    //         email: email
    //     }
    // })
    bcrypt.compare(password, config.SALT_ROUNDS, async function (err, result) {

    })
}

export async function refreshToken(token: string) {
    jwt.verify(token, config.AUTH_PUBLIC_KEY, { algorithms: ['RS256'] }, function (err, payload) {

    })
}

export async function generateAuthToken() {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    })
    return { publicKey, privateKey }
}

export async function retryAxiosCall() {
    // , retryDelay: axiosRetry.exponentialDelay
    axiosRetry(axios, { retries: 3 })
    console.log("a")
    const result = await axios.post('http://localhost:3001/test/retry/call', {})
    return result
}