import request from 'superagent'
import { DanceMoves, Move } from '../../models/dance'

const rootURL = '/api/v1'

export async function fetchMoves(): Promise<string[]> {
  const res = await request.get(rootURL)
  return res.body
}
export async function fetchMoveById(id: number): Promise<Move[]> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addMove(newGame: DanceMoves) {
  await request.post(rootURL).send(newGame)
}

export async function deleteMove(id: number) {
  await request.delete(`${rootURL}/${id}`)
}
