import { Outlet } from 'react-router-dom'
import { Header } from '..'

export const Layout = () => {
  return (
    <div className='max-w-[1150px] m-auto flex flex-col gap-28 pb-20'>
        <Header/>
        <Outlet/>
    </div>
  )
}
