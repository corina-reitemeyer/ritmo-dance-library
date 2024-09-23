import { Move } from '../../models/dance.ts'
import connection from './connection.ts'

const db = connection

// Get the dance moves
export async function getAllMoves(): Promise<Move[]> {
  try {
    const moves = await db('dance_moves').select()
    console.log('Fetched moves:', moves) // Log the fetched moves
    return moves
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching all moves: ${error.message}`)
    } else {
      console.error('Unknown error fetching all moves:', error)
    }
    throw error
  }
}

export async function getMoveById(id: number): Promise<Move> {
  return db('dance_moves').where({ id }).select().first()
}

// Delete the dance move
export function deleteMove(id: number) {
  return db('dance_moves').where({ id }).del()
}

// Add the dance move
export function addMove(newMove: Move) {
  return db('dance_moves').insert(newMove)
}
