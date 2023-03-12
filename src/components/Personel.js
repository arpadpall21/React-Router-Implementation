import { useLoaderData, NavLink } from 'react-router-dom'
import personel from '../resources/personel.json'
import './Personel.css'


export default function Personel() {
  const personel = useLoaderData()

  return (
    <ul>
      {personel.map(person =>
        <NavLink
          key={person.id}
          className='personel'
          to={String(person.id)}
        >
          {person.name}
        </NavLink>)}
    </ul>
  );
}

export async function personelLoader() {
  return personel           // this would be some fetch api in a real app
}

