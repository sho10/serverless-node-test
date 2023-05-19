import { Response, Request } from 'express';
import { Post, JsonController, Req, Body, Res, Params, UseBefore, Param } from 'routing-controllers'
import { createLoginUser, refreshToken, createRegisterUser, generateAuthToken, retryAxiosCall } from './model.js';
import { registerBody } from '../validators/register-body.js';
import { ajvHandler } from '../../middlewares/ajv-handler.js';
import { loginBody } from '../validators/login-body.js';

@JsonController()
export class AuthController {
    @Post('/register')
    // @UseBefore(ajvHandler)
    async registerUser(
        @Body() body: registerBody,
        @Res() response: Response
    ) {
        try {
            const result = await createRegisterUser(body)
            return response.status(200).json({ token: result })
        } catch (error) {
            console.log(error)
        }
    }

    @Post('/retry/call')
    async retryCall(
        @Res() response: Response
    ) {
        try {
            await retryAxiosCall()
            return response.status(200)
        } catch (error) {
            return response.status(500)
        }
    }

    @Post('/login')
    async loginUser(
        @Body() body: loginBody,
        // @UseBefore(loginHandler)
        @Res() response: Response
    ) {
        try {
            await createLoginUser(body)
        } catch (error) {
            console.log(error)
        }
    }

    @Post('/refresh/token')
    async refreshToken(
        @Params() token: string,
    ) {
        try {
            await refreshToken(token)
        } catch (error) {
            console.log(error)
        }
    }
    @Post('/generate/token')
    async generateToken(
        @Res() response: Response
    ) {
        try {
            const result = await generateAuthToken()
            response.status(200).json(result)
        } catch (error) {
            console.log(error)
        }
    }
}

