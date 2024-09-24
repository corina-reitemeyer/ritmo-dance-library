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

//POST route 'api/v1/dance-moves"
router.post('/', async (req, res) => {
  const newMove = req.body
  try {
    await db.addMove(newMove)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// DELETE route 'api/v1/dance-moves/:id'
router.delete('/:id', async (req, res) => {
  const danceId = Number(req.params.id)
  try {
    await db.deleteMove(danceId)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

export default router
