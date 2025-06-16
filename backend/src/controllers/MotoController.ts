import type { Request, Response } from 'express';

export class MotoController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Desde el Get para la moto')
    };
    static postMoto = async (req: Request, res: Response) => {
        console.log('Desde el Post para la moto')
    };

    static putMoto = async (req: Request, res: Response) => {
        console.log('Desde el Put para la moto')
    };

    static deleteMoto = async (req: Request, res: Response) => {
        console.log('Desde el Delete para la moto')
    }

}