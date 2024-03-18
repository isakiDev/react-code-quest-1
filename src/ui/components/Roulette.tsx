import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

import { useDraws } from '../../draws'

interface Participant {
  id: string
  username: string
}

interface Props {
  drawId: string
  participants: Participant[]
}

export const Roulette: React.FC<Props> = ({ drawId, participants }) => {
  const [winner, setWinner] = useState<Participant | null>(null)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [confetti, setConfetti] = useState<boolean>(false)

  const { onUpdateDraw } = useDraws()

  const startRoulette = () => {
    setIsRunning(true)

    const randomIndex = Math.floor(Math.random() * participants.length)
    setWinner(participants[randomIndex])

    setIsRunning(false)
    setConfetti(true)
  }

  useEffect(() => {
    if (winner !== null) {
      onUpdateDraw({ drawId, payload: { winnigUserId: winner.id } })
      console.log('si')
    }
  }, [winner])

  return (
    <div className="text-4xl font-bold flex items-center justify-center">
      {confetti && <Confetti />}
      {isRunning ? (
        <p>¡Girando...</p>
      ) : (
        <>
          {winner && <p>¡El ganador es: {winner.username}!</p>}
          <button
            className="p-1 bg-indigo-400 rounded-full"
            onClick={startRoulette}
            disabled={isRunning}
          >
            Comenzar sorteo
          </button>
        </>
      )}
    </div>
  )
}
