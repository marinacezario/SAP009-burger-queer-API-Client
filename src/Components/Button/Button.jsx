<<<<<<< HEAD
export const Button = ({text, type, alt, value, className}) => {
    return (
        <button 
            type={type} 
            alt={alt} 
            value={value} 
            className={className}
        >{text}</button>
    )
}
=======
export function Button({type, text, value, className}) {
    return (
      <input
        type={type}      
        text={text}   
        value={value}   
        className= {className}
      />
    );
  }
  
>>>>>>> 28aeaa48629483fd84d757c87db0dd87333f2a16
