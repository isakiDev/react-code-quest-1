import { CreateParticipantResponse, DrawsResponse, ErrorResponse } from "../../types"

const API_URL = import.meta.env.VITE_API_URL

export const getDraws = async () => {
  const resp = await fetch(`${API_URL}/draws`)

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as DrawsResponse[]

  return data
}

export const createParticipantDraw = async (token: string, drawId: string) => {
  const resp = await fetch(`${API_URL}/participants`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ drawId })
  })

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as CreateParticipantResponse

  return data
}


const handleErrorExepcion = (error: ErrorResponse) => {
  const errorMessages = error.message ?? 'Error in fetch'

  const errors = Array.isArray(errorMessages)
    ? errorMessages.map(error => error).join('')
    : errorMessages

  throw new Error(errors)
}