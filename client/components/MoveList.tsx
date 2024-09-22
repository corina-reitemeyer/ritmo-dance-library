import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMove, fetchMoves } from '../apis/apiClient'
import DanceMove from './DanceMove/DanceMove'

// This component will be used for the overview / library page
export default function MoveList() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id: number) => deleteMove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['games'] }),
  })

  const handleDelete = async (id: number) => {
    await mutation.mutate(id)
    console.log('Entry deleted successfully')
  }

  const {
    data: dance_moves,
    isPending,
    isError,
  } = useQuery({ queryKey: ['dance_moves'], queryFn: fetchMoves })

  if (isError) {
    return <p>Error....</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      {dance_moves.map((move, i) => {
        return (
          <div key={move.id}>
            <DanceMove
              key={i}
              name={''}
              level={''}
              synonymns={''}
              translation={''}
              move_type={''}
              rueda_sign={''}
              starts_with={''}
              contains={''}
              based_on={''}
              similar_to={''}
              bar_counts={0}
              instructions_follower={''}
              instructions_lead={''}
              source={''}
              variations={''}
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
