import { useState } from 'react'
import Modal from 'react-modal'
import { useDraws } from '../../draws'
import { toast } from 'sonner'

Modal.setAppElement('#root')

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface Data {
  name: string
  startDate: Date
  finalDate: Date
}

export const AddDrawModal = ({ isOpen, onClose }: Props) => {

  const { onAddDraw } = useDraws()

  const [data, setData] = useState<Data>({
    name: '',
    startDate: new Date(),
    finalDate: new Date(),
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await onAddDraw(data)

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
      <h1 className='font-bold text-2xl pb-4'>Agregar</h1>
      <hr />
      <form className='flex flex-col gap-2 px-4 py-2'>
        <div className='flex flex-col gap-4'>
          <label className='font-semibold'>Nombre</label>
          <input
            className={'border border-gray-300 p-2 rounded-md pl-3'}
            name='name'
            placeholder='Event name'
            type='text'
            value={data.name}
            onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
          />
          <label className='font-semibold'>Fecha de Inicio</label>
          <input
            className={'border border-gray-300 p-2 rounded-md pl-3'}
            name='startDate'
            placeholder='StartDate'
            type='datetime-local'
            value={data.startDate.toISOString().substring(0, 16)}
            onChange={(e) => setData(prev => ({ ...prev, startDate: new Date(e.target.value) }))}
          />
          <label className='font-semibold'>Fecha final</label>
          <input
            className={'border border-gray-300 p-2 rounded-md pl-3'}
            name='finalDate'
            placeholder='Final Date'
            type='datetime-local'
            value={data.finalDate.toISOString().substring(0, 16)}
            onChange={(e) => setData(prev => ({ ...prev, finalDate: new Date(e.target.value) }))}
          />
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
