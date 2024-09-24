export interface DanceMoves {
  style_id: number
  name: string
  level: string
  synonyms: string
  translation: string
  moveType: string
  ruedaSign: string
  startsWith: string
  contains: string
  basedOn: string
  similarTo: string
  barCounts: number
  instructionsForFollower: string
  instructionsForLead: string
  source: string
  variations: string
}

export interface Move extends DanceMoves {
  id: number
}

export interface DanceStyles {
  id: number
  name: string
}
