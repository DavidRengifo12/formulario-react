import Router from 'express';
import { EstudiantesAcudientesController } from '../controllers/EstudianteAcudienteController';

const router = Router()

router.get('/', EstudiantesAcudientesController.getAll)
router.post('/', EstudiantesAcudientesController.postEstudianteAcudiente)
router.put('/', EstudiantesAcudientesController.putEstudianteAcudiente)
router.delete('/', EstudiantesAcudientesController.deleteEstudianteAcudiente)

export default router