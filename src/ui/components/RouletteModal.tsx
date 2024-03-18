import Modal from 'react-modal'
import { Roulette } from '..'
import { useDraws } from '../../draws'
import { useEffect, useState } from 'react'

Modal.setAppElement('#root')

interface Participant {
  id: string
  username: string
}

interface Props {
  isOpen: boolean
  drawId: string
  onClose: () => void
}

export const RouletteModal = ({ isOpen, onClose, drawId }: Props) => {
  const [participants, setParticipants] = useState <Participant[]>([])

  const { onGetAllParticipantsDraw } = useDraws()

  const getParticipants = async () => {
    const participantsFounds = await onGetAllParticipantsDraw(drawId)

    if (!participantsFounds) return

    const participantsData = participantsFounds.map(participant => ({
      id: participant.user.id,
      username: participant.user.username
    }))

    setParticipants(participantsData)
  }

  useEffect(() => {
    getParticipants()
  }, [])
  
  return (
    <Modal
      className='modal'
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName='modal-background'
      style={{
        content: {
          width: '500px'
        }
      }}
    >
      {
        participants.length > 0 && <Roulette drawId={drawId} participants={participants} />
      }
    </Modal>
  )
}
