export interface DanceMoves {
  id: number
  style_id: number
  name: string
  level: string
  synonymns: string
  translation: string
  move_type: string
  rueda_sign: string
  starts_with: string
  contains: string
  based_on: string
  similar_to: string
  bar_counts: number
  instructions: string
  source: string
  variations: string
}

export interface DanceStyles {
  id: number
  name: string
}
