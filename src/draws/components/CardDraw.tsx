import { toast } from "sonner"

import { useDraws } from ".."
import { useAuth } from "../../auth"
import { DrawsResponse } from "../../types"

interface Props {
  draw: DrawsResponse
}

export const CardDraw = ({ draw }: Props) => {
  const { name, id } = draw

  const { isLogged } = useAuth()
  const { onParticipateDraw } = useDraws()

  const handleClick = async () => {
    toast.promise(onParticipateDraw(id), {
      success: 'Participating',
      error: (error) => error.message
    })
  }

  return (
    <div className="bg-[#0e0a1f] hover:shadow-xl hover:cursor-pointer rounded-md">
      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
      {/* <img className="rounded-t-lg" src={img} alt=""/> */}
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold">{name}</h1>
        {/* <p>{description}</p> */}

        { isLogged && (
          <div className="flex justify-center px-8">
            <button 
              className="py-2 w-full font-semibold border-2 hover:bg-[#e9d2fe] hover:text-black transition-colors duration-500 rounded-3xl"
              onClick={handleClick}
            >Participar</button>
          </div>
        )}
        
      </div>
    </div>
  )
}