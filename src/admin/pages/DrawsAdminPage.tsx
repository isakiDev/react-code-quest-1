import { useEffect, useState } from "react"
import { useDraws } from "../../draws"
import { CardDrawAdmin } from ".."
import { AddDrawModal } from "../../ui"

export const DrawsAdminPage = () => {
  const { onGetDraws, draws } = useDraws()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    onGetDraws()
  }, [])

  return (
    <section className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {
          draws?.map(draw => (
            <CardDrawAdmin key={draw.id} draw={draw}/>
          ))
        }

        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-0 right-0 m-4 size-20 text-4xl text-white bg-indigo-900 rounded-full"
        >+</button>

        {
          isModalOpen && (
            <AddDrawModal isOpen={true} onClose={() => setIsModalOpen(false)}/>
          )
        }
    </section>
  )
}
