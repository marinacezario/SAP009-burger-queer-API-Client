export function Input({type, value, onChange, placeholder }) {
    //alt
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
