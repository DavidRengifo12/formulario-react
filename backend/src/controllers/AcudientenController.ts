import type {Request, Response} from 'express'
import { Acudiente } from '../models/Acudiente'


export class AcudienteController {
    static getAll = async (req: Request, res:Response) =>{
        console.log('DESDE EL GET Api/Acudientes')
    };

    static getAcudienteById = async (req: Request, res:Response) =>{
        console.log('DESDE EL GET_ID Api/Acudientes')
    };

    static postAcudiente = async(req: Request, res:Response) =>{
        try {//se utiliza try-catch para manejar errores de manera controlada
            const acudiente = new Acudiente(req.body);// en new Acudiente se crea una nueva instancia para el objeto Acudiente, y se le pasa el cuerpo de la peticion como argumento
            await acudiente.save(); //se utiliza await para pausar la ejecuciona hasta que la promesa se resuelva
            res.status(201).json('Acudiente creado con éxito');//establece codigo de esatdo en la respuesta htpp, indica que la solicitud fue exitosa y se creo un  nuevo recurso en el servidor
        }catch(error){
            res.status(500).json({error: 'Error al crear el acudiente'});//Esteblece un codigo de estado 500, indica que hubo un error interno en el servidor al procesar la solicitud
        }
    };

    static putAcudiente = async(req:Request, res:Response) =>{
        console.log('DESDE EL PUT_ACTUALIZAR Api/ACUDIENTES')
    };

    static deleteAcudiente = async(req: Request, res: Response) =>{
        console.log('DESDE EL DELETE_ACTUALIZAR Api/Acudientes')
    }
}