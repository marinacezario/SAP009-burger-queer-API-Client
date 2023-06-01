export function Button({type, text, value, className}) {
    return (
      <button
        type={type}      
        text={text}   
        value={value}   
        className= {className}
      >{text}</button>
    );
  }
  