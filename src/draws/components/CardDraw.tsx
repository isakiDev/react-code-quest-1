export const CardDraw = () => {

  const isLogged = false

  return (
    <div className="bg-[#0e0a1f] hover:shadow-xl hover:cursor-pointer rounded-md">
      <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold">Marzo 2024</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem eveniet voluptas enim id,</h1>


        { isLogged && (
          <div className="flex justify-center px-8">
            <button className="py-2 w-full font-semibold border-2 hover:bg-[#e9d2fe] hover:text-black transition-colors duration-500 rounded-3xl">Participar</button>
          </div>
        )}
        
      </div>
    </div>
  )
}