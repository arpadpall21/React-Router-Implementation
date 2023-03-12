import { useLoaderData, NavLink, useParams } from 'react-router-dom'
import personel from '../resources/personel.json'
import './PersonelDetail.css'


export default function PersonelDetail() {
  const { name, jobTitle } = useLoaderData()
  const { id } = useParams()      // route param can be catcher here as well (for the demo sake)

  return (
    <div>
      <header className='backButtonContainer'>
        <NavLink to='/personel'>Back</NavLink>
      </header>
      <div className='personelDetail'>
        <p> Id : {id}</p>
        <p> Name : {name}</p>
        <p> Job Title : {jobTitle}</p>
      </div>
    </div>
  );
}

export async function personelDetailLoader({ params }) {
  const { id } = params
  const result = personel.find(person => String(person.id) === id)   // the person data would be called with some fetch api in a real app

  if (!result) {
    console.error(`user id ${id} not found!`)
    throw Error('user id not found')
  }

  return result
}
