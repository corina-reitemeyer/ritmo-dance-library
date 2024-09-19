import { DanceMoves } from '../../models/dance.ts'
import connection from './connection.ts'

const db = connection

// Get the dance moves
export async function getAllMoves(): Promise<DanceMoves[]> {
  return db('dance-moves').select()
}

export async function getMoveById(id: number): Promise<DanceMoves> {
  return db('dance-moves').where({ id }).select().first()
}

// Delete the dance move
export function deleteMove(id: number) {
  return db('dance-moves').where({ id }).del()
}

// Add the dance move
export function addMove(newMove: DanceMoves) {
  return db('dance-moves').insert(newMove)
}
