import Router from 'express'
import { MotoController } from '../controllers/MotoController'

const router = Router()

router.get('/', MotoController.getAll)
router.post('/', MotoController.postMoto)
router.put('/', MotoController.putMoto)
router.delete('/', MotoController.deleteMoto)


export default router