import type {Response, Request} from 'express'
import { Estudiante } from '../models/Estudiante'


export class EstudianteController{
    static getAll = async (req: Request, res: Response) =>{
        console.log('Desde el Get para estudiante Api/Estudiantes')
    };
    static postEstudiante = async (req:Request, res:Response) => {
       try{
            const estudiante = new Estudiante(req.body);
            await estudiante.save();
            res.status(201).json('Estudiante creado con éxito');
       }
       catch(error){
            res.status(500).json({error: 'Error al crear el estudiante'});
       }
    };
    static putEstudiante = async (req:Request, res:Response) => {
        console.log('Desde el put para Estudiante Api/Estudents')
    };
    static deleteEstudiante = async (req:Request, res:Response) => {
        console.log('Desde el delete para Estudiante Api/estudiante ')
    }


    
}
