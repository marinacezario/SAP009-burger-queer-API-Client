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
  