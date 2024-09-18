import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

//GET route 'api/v1/dance-moves'
router.get('/', async (req, res) => {
  try {
    const moves = await db.getAllMoves()
    res.json(moves)
  } catch (error) {
    console.log(error)
    res.status(500).json(`Database error ${error}`)
  }
})

//GET route 'api/v1/dance-moves/:id'
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const danceMoves = await db.getMoveById(id)
    res.json(danceMoves)
  } catch (error) {
    console.log(error)
    res.status(500).json(`Database error ${error}`)
  }
})

export default router
