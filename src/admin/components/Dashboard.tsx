import { Link, Outlet } from "react-router-dom"

const LINKS = [
  { to: '/admin/draws', name: 'Sorteos'}
]

export const Dashboard = () => {
  return (
    <div id="body" className="bg-white/80 h-screen flex">
      <nav className="bg-[#26184a]  w-80 h-screen flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <div className="user flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-4">
          <img className="w-24 rounded-full shadow-xl" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg text-white">Name</span>
          </div>
        </div>

        <ul className="px-6 space-y-2">
          {
            LINKS?.map(({ name, to}) => (
              <Link 
                className="block px-4 py-2.5 text-white font-semibold hover:bg-emerald-950 hover:text-white rounded-lg"
                key={name} 
                to={to}
              >{name}</Link>
            ))
          }
        </ul>
      </nav>

      <div className="right w-full flex gap-2 flex-col">
        <Outlet />
      </div>
    </div>
  )
}
