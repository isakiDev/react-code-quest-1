import Logo from '../../../public/code-quest/LOGOBLANCO.png'
import { useAuth } from '../../auth/hooks/useAuth'

export const Header = () => {
  const { isLogged } = useAuth()

  const handleClick = async () => {
    window.location.href = 'http://localhost:3000/api/auth/discord'
  }

  return (
    <header className="bg-[#120c24]  text-white/90 h-20 px-4 sm:px-10 shadow-md sticky top-0">
      <nav className="flex items-center justify-between p-2 h-full">
        <img className='w-[144px] h-[26px]' src={Logo} alt="Logo devtalles" />

        { !isLogged && (
          <button
            onClick={handleClick}
            // to='/auth/login' 
            className="px-4 py-2 bg-[#e9d2fe] hover:bg-white transition-colors rounded-full text-gray-800 font-semibold"
          >Iniciar sesión</button>
        )}
      </nav>
    </header>
  )
}
