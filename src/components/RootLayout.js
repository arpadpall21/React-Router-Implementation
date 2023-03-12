import { NavLink, Outlet} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs'
import './base.css'

export default function RootLayout() {
  return (
    <div>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='personel'>Personel</NavLink>
        <NavLink to='help'>Help</NavLink>
        <div><Breadcrumbs /></div>
      </header>
      <main>
        <Outlet />      {/* child components are rendered here */}
      </main>
    </div>
  )
}
