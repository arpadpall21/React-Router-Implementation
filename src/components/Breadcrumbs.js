import { Link, useLocation } from 'react-router-dom'
import './Breadcrumbs.css'


export default function Breadcrumbs() {
  const currentLocation = useLocation().pathname
  let location = undefined

  if (currentLocation === '/') {
    location = <Link to='/'><span>home</span> &#10148;</Link>
  } else {
    let link = ''
    location = currentLocation.split('/')
      .filter(pathSegment => pathSegment)
      .map(pathSegment => {
        link += `/${pathSegment}`
        return <Link to={link} key={link}><span>{pathSegment}</span> &#10148;</Link>
      })
  }

  return (
    <div className='breadcrumbs'>
      {location}
    </div>
  );
}
