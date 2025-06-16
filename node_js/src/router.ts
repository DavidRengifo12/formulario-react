import Router from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Bienvenido a este Mundo')
})

router.get('/fre', (req, res) => {
    res.send('VIDEOGAME Free Fire')
})

router.get('/futbol', (req, res) => {
    res.send('RMFC el Mejor de EUROPA')
})

router.get('/blog', (req, res) => {
    res.send('BIENVENIDO AL To blog')
})

export default router;