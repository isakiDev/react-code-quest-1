import WinkLogo from '../../../public/code-quest/wink.png'

export const Banner = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-center gap-10 px-4 sm:px-0">
        <div className='sm:w-1/2 w-full shadow-md border-2 border-indigo-800 border-dashed rounded-3xl p-4 bg-white/95'>
          <div className='w-full'>
            <img className='w-20' src="data:image/svg+xml,%3C%3Fxml%20version='1.0'%20encoding='utf-8'%3F%3E%3Csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2054.41%2012.41'%20style='enable-background:new%200%200%2054.41%2012.41;'%20xml:space='preserve'%3E%3Cstyle%20type='text/css'%3E%20.st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%23E6D0FD;%7D%0A%3C/style%3E%3Cg%3E%3Ccircle%20class='st0'%20cx='6.2'%20cy='6.2'%20r='6.2'/%3E%3Ccircle%20class='st0'%20cx='27.2'%20cy='6.2'%20r='6.2'/%3E%3Ccircle%20class='st0'%20cx='48.2'%20cy='6.2'%20r='6.2'/%3E%3C/g%3E%3C/svg%3E%0A" />
          </div>
          <div>
            <h1 className='text-4xl font-extrabold text-center pb-4'>+DevTalles</h1>
            <p className=' text-lg font-semibold'>
              Nos encanta celebrar la alegría y la conexión con nuestra comunidad. Es por eso que estamos encantados de presentarte nuestro espacio dedicado a los sorteos, donde la diversión y la emoción se unen para brindarte oportunidades emocionantes.
            </p>
          </div>
        </div>
        <img className='h-[270px] hidden sm:block' src={WinkLogo} alt="Logo Fly" />
      </div>
    </section>
  )
}
