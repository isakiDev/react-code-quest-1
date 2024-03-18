// import { useEffect } from 'react'
import Modal from 'react-modal'
import { DrawsResponse } from '../../types'
import { useDraws } from '../../draws'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

Modal.setAppElement('#root')

interface Props {
  isOpen: boolean
  draw: DrawsResponse
  onClose: () => void
}

interface Payload {
  name: string
  winningId?: string
}

export const EditModal = ({ isOpen, onClose, draw }: Props) => {
  const { name } = draw

  const [payload, setPayload] = useState<Payload>({
    name: ''
  })

  useEffect(() => {
    setPayload({ name })
  }, [])

  const { onUpdateDraw } = useDraws()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    await onUpdateDraw({drawId:draw.id, payload})
    .then(() => toast.success('Actualizado'))
    .catch(() => toast.error('Error'))

    onClose()
  }

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
      <h1 className='font-bold text-2xl pb-4'>Editar</h1>
      <hr />
      <form className='flex flex-col gap-2 px-4 py-2'>
        <div className='flex flex-col gap-4'>
          <label className='font-semibold'>Nombre</label>
          <input
            className={'border border-gray-300 p-2 rounded-md pl-3'}
            name='name'
            placeholder='Event name'
            type='text'
            value={payload.name}
            onChange={(e) => setPayload((prev) => ({...prev, name: e.target.value }))}
          />
          {/* <label className='font-semibold'>Fecha de Inicio</label>
          <input
            className={'border border-gray-300 p-2 rounded-md pl-3'}
            name='startDate'
            placeholder='StartDate'
            type='datetime-local'
            value={startDate}
            onChange={() => {}}
          />
          <label className='font-semibold'>Fecha final</label>
          <input
            className={'border border-gray-300 p-2 rounded-md pl-3'}
            name='finalDate'
            placeholder='Final date'
            type='datetime-local'
            // value={name}
          /> */}
        </div>

        <button
          type='submit'
          onClick={handleSubmit}
          className='py-2 px-4 rounded-md text-cyan-700 border border-cyan-700 font-semibold hover:bg-cyan-700 hover:text-white duration-300'
        >
          Guardar
        </button>
      </form>
    </Modal>
  )
}
