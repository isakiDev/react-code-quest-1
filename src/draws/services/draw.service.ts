import { CreateParticipantResponse, DrawsResponse, ErrorResponse, ParticipantsDrawResponse } from "../../types"

const API_URL = import.meta.env.VITE_API_URL

interface UpdateDraw {
  drawId: string
  payload: { 
    name?: string
    winnigUserId?: string   
  }
  token: string
}

interface PayloadDraw {
  token: string
  payload: {
    name: string
    startDate: Date
    finalDate: Date
  }
}

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

export const updateDraw = async ({ token, drawId, payload }: UpdateDraw) => {
  const resp = await fetch(`${API_URL}/draws/${drawId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as DrawsResponse
  return data
}

export const deleteDraw = async (token: string, drawId: string) => {
  const resp = await fetch(`${API_URL}/draws/${drawId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }
  
  return true
}

export const getAllParticipantsDraw = async (token: string, drawId: string) => {
  const resp = await fetch(`${API_URL}/participants/${drawId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as ParticipantsDrawResponse[]
  return data
}

export const addDraw = async ({ token, payload }: PayloadDraw) => {
  const resp = await fetch(`${API_URL}/draws`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as DrawsResponse
  return data
}

const handleErrorExepcion = (error: ErrorResponse) => {
  const errorMessages = error.message ?? 'Error in fetch'

  const errors = Array.isArray(errorMessages)
    ? errorMessages.map(error => error).join('')
    : errorMessages

  throw new Error(errors)
}