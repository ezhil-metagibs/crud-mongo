import express from 'express'

const router = express.Router()

// CRUD

// R - For get all data
router.get('/', (req, res) => {
    res.send({data: 'Read data'})
})

// C - For create a Data
router.post('/', () => {
    res.send({data: 'Create data'})
})

// U - for update data
router.put('/:id', () => {
    res.send({data: 'Update data'})
})

// D - for delete data
router.delete('/:id', () => {
    res.send({data: 'Delete data'})
})

export default router