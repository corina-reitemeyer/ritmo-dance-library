import request from 'superagent'
import { DanceMoves, Move } from '../../models/dance'

const rootURL = '/api/v1/dance-move'

export async function fetchMoves(): Promise<Move[]> {
  const res = await request.get(rootURL)
  return res.body
}
export async function fetchMoveById(id: number): Promise<Move[]> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addMove(newMove: DanceMoves) {
  await request.post(rootURL).send(newMove)
}

export async function deleteMove(id: number) {
  await request.delete(`${rootURL}/${id}`)
}
