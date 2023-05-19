import { ExpressMiddlewareInterface } from 'routing-controllers';
import { NextFunction } from 'express';

export class ajvHandler implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: NextFunction): any {

    }
}