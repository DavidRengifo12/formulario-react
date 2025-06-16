import Router from 'express'
import { AcudienteController } from '../controllers/AcudientenController'
import { handleInputErros } from '../middleware/Validation'
import { body } from 'express-validator'
import { Acudiente } from '../models/Acudiente'

const router = Router()

router.get('/', AcudienteController.getAll)
router.get('/:id', AcudienteController.getAcudienteById)
router.post('/', 
    body('acudiente_cedula')
    .notEmpty().withMessage('La cedula del acudiente no puede estar en blanco')
    .isNumeric().withMessage('La cedula del acudiente debe ser un número')
    .custom(async (value) => {
        const acudienteExistente = await Acudiente.findOne({//await pausa la ejecucion hasta que la promesa se devuelva, findOne se utiliza para buscar registros en la DB que cunmplan con las condiciones especificadas
            where: { acudiente_cedula: value },
        })
        if(acudienteExistente) {
            throw new Error('Ya existe un acudiente con esta cedula')//Se lanza un nuevo objeto de error
        }
        return true
    }),

    body('acudiente_nombre').notEmpty().withMessage('El nombre del acudiente no puede estar en blanco')
    .isLength( {max: 100}).withMessage('El nombre del acudiente no puede tener más de 100 caracteres'),

    body('acudiete_tipo').notEmpty()
    .withMessage('El tipo de acudiente no puede estar en blanco')
    .isIn(['MADRE', 'PADRE', 'OTRO']).withMessage('El tipo de acudiente debe ser MADRE, PADRE o OTRO'),


    body('acudiente_celualr').notEmpty().withMessage('El numero de celular no debe estar en blanco')
    .isNumeric().withMessage('El numero de celular debe ser Numerico'),

    body('acudiente_tel_oficina').notEmpty().withMessage('El numero de telefono de oficina no debe estar en blanco')
    .isNumeric().withMessage('El numero de telefono de oficina debe ser Numerico'),

    body('acudiente_correoe').notEmpty().withMessage('El correo electronico no puede estar en blanco')
    .isEmail().withMessage('El correo electronico no es valido')
    .isLength({max: 100}).withMessage('El correo electronico no puede tener más de 100 caracteres'),

    body('acudiente_direccion').notEmpty().withMessage('La direccion no puede estar en blanco')
    .isLength({max: 100}).withMessage('La direccion no puede tener más de 100 caracteres'),
    handleInputErros,
    AcudienteController.postAcudiente

)
router.put('/', AcudienteController.putAcudiente)
router.delete('/',AcudienteController.deleteAcudiente)

export default router