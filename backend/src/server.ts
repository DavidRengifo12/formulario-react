import express from 'express'
import colors from 'colors'
import {db} from './config/db'
import morgan from 'morgan';
import AcudienteRouter from './routes/AcudienteRouter'
import EstudianteRouter from './routes/EstudiantesRouter';
import MotoRouter from './routes/MotoRouter';
import EstudiantesAcudientesRouter from './routes/EstudiantesAcudientesRouter';


async function ConnectDB() {
    try{
        await db.authenticate();
        console.log(colors.green.bold('CONEXION EXITOSA A LA BD'));

        // Sincronizar los modelos con la base de datos (opcional, si no usas migraciones)
        await db.sync({ alter: true }); // Esto asegurará que las tablas estén actualizadas según el modelo
        console.log(colors.green.bold('Tablas sincronizadas correctamente'));

        try{
            const [results, metadata] = await db.query('select * from tbl_estudiante LIMIT 5')
            console.log('Datos de Ejemplo: ',results);
        }
        catch(error){
            console.log('Error al realizar la consulta: ',error);
        }
    }
    catch(error){
        console.error('Error al conecta la BD: ',error)
        console.log(colors.red.bold('FALLO LA CONEXION A LA BD'));
    }
}

ConnectDB()

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/acudientes', AcudienteRouter)
app.use('/api/estudiantes', EstudianteRouter)
app.use('/api/motos', MotoRouter)
app.use('/api/estudiantesacudientes', EstudiantesAcudientesRouter)


export default app;