import { Link } from 'react-router-dom'

export function Button({text, type, alt, value, className, path}) {
  return (
    <>
      <Link to={path}>
        <button 
          type={type} 
          alt={alt} 
          value={value} 
          className={className}
        >{text}</button>
      </Link>
    </>
  )
}
