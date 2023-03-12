import { NavLink, Outlet } from 'react-router-dom';
import './HelpLayout.css'

export default function HelpLayout() {
  return (
    <div className='help'>
      <p> This is the Help page </p>
      <header>
        <NavLink to='faq'>FAQ</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

