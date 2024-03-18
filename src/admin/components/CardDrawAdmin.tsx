import { toast } from "sonner"
import { useDraws } from "../../draws"
import { DrawsResponse } from "../../types"
import { IconDelete, IconUpdate, IconUsers, RouletteModal } from '../../ui'
import { EditModal } from '../../ui'
import { useState } from 'react'

interface Props {
  draw: DrawsResponse
}


export const CardDrawAdmin = ({ draw }: Props) => {
  const { name } = draw
  const { onDeleteDraw } = useDraws()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRouletteOpen, setIsRouletteOpen] = useState(false)

  const handleClickUpdate = () => {
    setIsModalOpen(true)
  }

  const handleClickCloseModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleClickDelete = async () => {
    toast.promise(onDeleteDraw(draw.id),{
      success: 'Draw eliminado',
      error:(error) => error.message
    })
  }

  return (
    <div className="bg-[#26184a] text-white flex flex-col rounded-xl shadow-md">
      <div>
        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />

        <div className="p-4">
          <h1 className="text-xl font-bold">{name}</h1>
        </div>
      </div>

      <div className="flex justify-end p-2">
        <button onClick={() => setIsRouletteOpen(true)} className="hover:text-amber-300"><IconUsers /></button>
        <button onClick={handleClickUpdate} className="hover:text-amber-300"><IconUpdate /></button>
        <button onClick={handleClickDelete} className="hover:text-amber-300"><IconDelete /></button>
      </div>

      {
        isModalOpen && (
          <EditModal
            isOpen={true}
            onClose={handleClickCloseModal}
            draw={draw}
          />
        )
      }

      {
        isRouletteOpen && (
          <RouletteModal
            drawId={draw.id}
            isOpen={isRouletteOpen}
            onClose={() => setIsRouletteOpen(false)} />
        )
      }
    </div>
  )
}
