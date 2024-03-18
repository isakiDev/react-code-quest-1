import { useEffect } from "react"

import { CardDraw, useDraws } from ".."

export const Draws = () => {

  const { draws, onGetDraws } = useDraws()

  useEffect(() => {
    onGetDraws()
  }, [])

  return (
    <section className="flex flex-col justify-center items-center text-white gap-8">
      <h1 className="text-4xl font-bold">Sorteos</h1>

      <div className="grid px-4 lg:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        {
          draws?.map((draw) => (
            <CardDraw 
              key={draw.id}
              draw={draw}
            />
          ))
        }
      </div>
    </section>
  )
}
