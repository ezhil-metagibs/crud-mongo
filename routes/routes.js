import express from 'express'
import { dataData, createData, updateData, deleteData } from '../controllers/data.controllers.js'

const router = express.Router()

// CRUD

// R - For get all data
router.get('/', dataData)

// C - For create a Data
router.post('/', createData)

// U - for update data
router.put('/:id', updateData)

// D - for delete data
router.delete('/:id', deleteData)

export default router