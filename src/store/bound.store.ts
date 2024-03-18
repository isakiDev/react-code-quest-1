import { create } from 'zustand'

import { devtools } from 'zustand/middleware'
import { AuthSlice, createAuthSlice } from './auth/auth.slice'
import { DrawSlice, createDrawSlice } from './draw/draw.slice'


export const useBoundStore = create<AuthSlice & DrawSlice>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createDrawSlice(...a)
    })
  )
)
