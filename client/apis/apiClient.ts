import request from 'superagent'

const rootURL = '/api/v1'

export async function fetchMoves(): Promise<string[]> {
  const res = await request.get(rootURL)
  return res.body
}
