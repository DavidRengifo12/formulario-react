import Router from "express";
import { EstudianteController } from '../controllers/EstudianteController'

const router = Router()

router.get('/', EstudianteController.getAll)
router.post('/', EstudianteController.postEstudiante)
router.put('/', EstudianteController.putEstudiante)
router.delete('/', EstudianteController.deleteEstudiante)




export default router;