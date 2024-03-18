import { type StateCreator } from 'zustand'

import { AUTH_STATUS } from '../../const'
import { type User } from '../../types'

export interface AuthSlice {
  status: AUTH_STATUS
  user: User | null

  onChecking: () => void
  onLogin: (user: User) => void
  onLogout: () => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  status: AUTH_STATUS.CHECKING,
  user: null,
  errorMessage: null,

  onChecking: () => {
    set({
      status: AUTH_STATUS.CHECKING,
      user: null,
    })
  },

  onLogin: (user) => {
    set({
      status: AUTH_STATUS.AUTHENTICATED,
      user,
    })
  },

  onLogout: () => {
    set({
      status: AUTH_STATUS.NOT_AUTHEN,
      user: null,
    })
  }
})
