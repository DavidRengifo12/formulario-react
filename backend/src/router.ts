import Router from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Bienvenido a este Mundo')
})

router.get('/Free', (req, res) => {
    res.send('Free Fire')
})

router.get('/futbol', (req, res) => {
    res.send('Nacional el Mejor de Colombia')
})

router.get('/blog', (req, res) => {
    res.send('Welcome To blog')
})

export default router;