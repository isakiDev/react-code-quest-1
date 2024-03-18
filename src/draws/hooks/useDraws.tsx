import { useBoundStore } from "../../store/bound.store"
import { addDraw, createParticipantDraw, getAllParticipantsDraw, getDraws  } from '../'
import { deleteDraw, updateDraw } from "../../draws"
import { useAuth } from "../../auth"

interface UpdateDraw {
  drawId: string
  payload: {
    name?: string
    winnigUserId?: string
  }
}

interface PayloadDraw {
  name: string
  startDate: Date
  finalDate: Date
}

export const useDraws = () => {
  const draws = useBoundStore(state => state.draws)
  const setDraws = useBoundStore(state => state.setDraws)
  const updateCurrentDraw = useBoundStore(state => state.updateDraw)
  const deleteCurrentDraw = useBoundStore(state => state.deleteDraw)

  const { onLogout } = useAuth()

  const onGetDraws = async () => {
    try {
      const draws = await getDraws()
      setDraws(draws)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const onParticipateDraw = async (drawId: string) => {
    const token = window.localStorage.getItem('TOKEN')

    if (!token) return 
    
    const participant = await createParticipantDraw(token, drawId)
    return participant
  }

  const onUpdateDraw = async ({ drawId, payload }: UpdateDraw) => {
    const token = window.localStorage.getItem('TOKEN')
    if (!token) return onLogout()

    try {
      const draw = await updateDraw({ token, drawId, payload })
      updateCurrentDraw(draw)
      return draw
    } catch (error) {
      console.log(error)
      throw error      
    }
  }

  const onDeleteDraw = async (drawId: string) => {
    const token = window.localStorage.getItem('TOKEN')
    if (!token) return onLogout()

    try {
      await deleteDraw(token, drawId)
      deleteCurrentDraw(drawId)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  
  const onGetAllParticipantsDraw = async (drawId: string) => {
    const token = window.localStorage.getItem('TOKEN')
    if (!token) return onLogout()

    try {
      const participants = await getAllParticipantsDraw(token, drawId)
      return participants
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const onAddDraw = (payload: PayloadDraw) => {
    const token = window.localStorage.getItem('TOKEN')
    if (!token) return onLogout()

    try {
      const draw = addDraw({ token, payload})
      return draw
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return {
    draws,

    onGetDraws,
    onParticipateDraw,
    onUpdateDraw,
    onDeleteDraw,
    onGetAllParticipantsDraw,
    onAddDraw
  }
}
