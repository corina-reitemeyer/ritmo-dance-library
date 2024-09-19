interface MoveProps {
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
  instructions_follower: string
  instructions_lead: string
  source: string
  variations: string
}

export default function DanceMove({
  name,
  level,
  synonymns,
  translation,
  move_type,
  rueda_sign,
  starts_with,
  contains,
  based_on,
  similar_to,
  bar_counts,
  variations,
  source,
  instructions_follower,
  instructions_lead,
}: MoveProps) {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{level}</h2>
        <p>{synonymns}</p>
        <p>{translation}</p>
        <p>{move_type}</p>
        <p>{rueda_sign}</p>
        <p>{starts_with}</p>
        <p>{contains}</p>
        <p>{based_on}</p>
        <p>{similar_to}</p>
        <p>{bar_counts}</p>
        <p>{variations}</p>
        <p>{source}</p>
        <p>{instructions_follower}</p>
        <p>{instructions_lead}</p>
      </div>
    </>
  )
}
