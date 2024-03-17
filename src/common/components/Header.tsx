import Logo from '../../../public/code-quest/LOGOBLANCO.png'

export const Header = () => {

  const handleClick = () => {
    // Dimensiones de la ventana emergente
    const width = 600;
    const height = 800;

    // Calcular la posición del centro de la pantalla
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open('http://localhost:3000/api/auth/discord', 'oauthWindow', `width=${width}, height=${height}, left=${left}, top=${top}`)

  }

  return (
    <header className="bg-[#120c24]  text-white/90 h-20 px-4 sm:px-10 shadow-md sticky top-0">
      <nav className="flex items-center justify-between p-2 h-full">
        <img className='w-[144px] h-[26px]' src={Logo} alt="Logo devtalles" />
        <button
          onClick={handleClick}
          // to='/auth/login' 
          className="px-4 py-2 bg-[#e9d2fe] hover:bg-white transition-colors rounded-full text-gray-800 font-semibold"
        >Iniciar sesión</button>
      </nav>
    </header>
  )
}
