import { AccessTokenResponse, CheckAuthStatusResponse, ErrorResponse, LoginProfileResponse, LoginResponse } from "../../types"

const API_URL = import.meta.env.VITE_API_URL

export const login = async (): Promise<LoginResponse> => {
  const resp = await fetch(`${API_URL}/auth/discord`)

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as LoginResponse

  return data
}

export const checkAuthStatus = async (token: string): Promise<CheckAuthStatusResponse> => {
  const resp = await fetch(`${API_URL}/auth/check-auth-status`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const data = await resp.json() as CheckAuthStatusResponse

  return data
}

export const getAccessToken = async (code: string) => {
  const resp = await fetch(`${API_URL}/auth/discord/callback?code=${code}`)

  if (!resp.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  const { access_token: accessToken } = await resp.json() as AccessTokenResponse

  const respProfile = await fetch(`${API_URL}/auth/discord/me?accessToken=${accessToken}`)

  if (!respProfile.ok) {
    const data = await resp.json() as ErrorResponse
    handleErrorExepcion(data)
  }

  return await respProfile.json() as LoginProfileResponse
} 

const handleErrorExepcion = (error: ErrorResponse) => {
  const errorMessages = error.message ?? 'Error in fetch'

  const errors = Array.isArray(errorMessages)
    ? errorMessages.map(error => error).join('')
    : errorMessages

  throw new Error(errors)
}
