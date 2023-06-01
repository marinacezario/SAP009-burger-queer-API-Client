import './ErrorLabel.css';

export function ErrorLabel({ value }) {
    console.log(value);
    return (
      <label className='error_label'>{value}</label>
    );
  }
  