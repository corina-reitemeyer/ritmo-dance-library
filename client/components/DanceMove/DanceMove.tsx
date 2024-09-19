import { MoveProps } from './DanceMove.type'
// This component will be used on the details page
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
