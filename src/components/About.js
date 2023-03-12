import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import './About.css'


export default function About() {
  const [ goHome, setGoHome ] = useState(false);

  if (goHome) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <p>This is the About page</p>
      <p><button className='goHome' onClick={() => setGoHome(true)}>Go Home</button></p>
    </div>
  );
}
