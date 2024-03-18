import { type StateCreator } from 'zustand'
import { DrawsResponse } from '../../types'

export interface DrawSlice {
  loading: boolean
  draws: DrawsResponse[]
  
  setDraws: (draws: DrawsResponse[]) => void
  updateDraw: (draw: DrawsResponse) => void
  deleteDraw: (drawId: string) => void
}

export const createDrawSlice: StateCreator<DrawSlice> = (set) => ({
  loading: true,
  draws: [],

  setDraws: (draws: DrawsResponse[]) => {
    set({ draws })
  },

  updateDraw: (updatedDraw: DrawsResponse) => {
    set((state) => ({
      draws: state.draws.map((draw) =>
        draw.id === updatedDraw.id ? updatedDraw : draw
      ),
    }));
  },

  deleteDraw: (drawId: string) => {
    set((state) => ({
      draws: state.draws.filter((draw) => draw.id !== drawId ),
    }));
  },
})
