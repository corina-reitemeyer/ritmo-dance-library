import { DanceMoves } from '../../models/dance.ts'
import connection from './connection.ts'

const db = connection

export async function getAllMoves(): Promise<DanceMoves[]> {
  return db('dance-moves').select()
}

export async function getMoveById(id: number): Promise<DanceMoves> {
  return db('dance-moves').where({ id }).select().first()
}
