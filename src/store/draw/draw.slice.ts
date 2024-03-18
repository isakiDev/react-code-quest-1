import { type StateCreator } from 'zustand'
import { DrawsResponse } from '../../types'

export interface DrawSlice {
  loading: boolean
  draws: DrawsResponse[]

  setDraws: (draws: DrawsResponse[]) => void
}

export const createDrawSlice: StateCreator<DrawSlice> = (set) => ({
  loading: true,
  draws: [],

  setDraws: (draws: DrawsResponse[]) => {
    set({ draws })
  },
})
