import type { Request, Response } from 'express';

export class EstudiantesAcudientesController{
    static getAll = async (req: Request, res: Response) => {
        console.log('DESDE EL GET(SOLICITAR) PARA LA RELACION DEL ESTUDIANTE YA ACUDIENTE')
    };

    static postEstudianteAcudiente = async (req: Request, res: Response) => {
        console.log('DESDE EL POST(CREAR) PARA LA RELACION DEL ESTUDIANTE YA ACUDIENTE')
    };

    static putEstudianteAcudiente = async (req: Request, res: Response) => {
        console.log('DESDE EL PUT(ACTUALIZAR) PARA LA RELACION DEL ESTUDIANTE YA ACUDIENTE')
    };

    static deleteEstudianteAcudiente = async (req: Request, res: Response) => {
        console.log('DESDE EL DELETE(ELIMINAR) PARA LA RELACION DEL ESTUDIANTE YA ACUDIENTE')
    }

}