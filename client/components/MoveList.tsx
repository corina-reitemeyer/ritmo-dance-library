import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMove, fetchMoves } from '../apis/apiClient'
import DanceMove from './DanceMove/DanceMove'

// This component will be used for the overview / library page
export default function MoveList() {
  // console.log('MoveList component rendered')
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id: number) => deleteMove(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['dance_moves'] }),
  })

  const handleDelete = async (id: number) => {
    await mutation.mutate(id)
    // console.log('Entry deleted successfully')
  }

  const {
    data: dance_moves,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dance_moves'], queryFn: fetchMoves })

  if (isError) {
    return <p>Error: {error.message}.</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!dance_moves || dance_moves.length === 0) {
    return <p>No dance moves available.</p>
  }

  console.log('Loading:', isLoading, 'Error:', isError, 'Data:', dance_moves) // Check if data is coming through via client side

  return (
    <>
      {dance_moves.map((move) => {
        return (
          <div key={move.id}>
            <DanceMove
              name={move.name}
              level={move.level}
              synonymns={move.synonymns}
              translation={move.translation}
              move_type={move.move_type}
              rueda_sign={move.rueda_sign}
              starts_with={move.starts_with}
              contains={move.contains}
              based_on={move.based_on}
              similar_to={move.similar_to}
              bar_counts={move.bar_counts}
              instructions_follower={move.instructions_follower}
              instructions_lead={move.instructions_lead}
              source={move.source}
              variations={move.variations}
            />
            <button
              onClick={() => {
                handleDelete(move.id)
              }}
            >
              Delete
            </button>
          </div>
        )
      })}
    </>
  )
}
