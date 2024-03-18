import { useBoundStore } from "../../store/bound.store"
import { createParticipantDraw, getDraws  } from '../'
export const useDraws = () => {
  const draws = useBoundStore(state => state.draws)
  const setDraws = useBoundStore(state => state.setDraws)


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

  return {
    draws,

    onGetDraws,
    onParticipateDraw
  }
}
