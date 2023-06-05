//components
import { Form } from '../../Components/Form/Form';
import { Header } from '../../Components/Header/Header';
//images
import logo from '../../assets/img/logo.png';
//styles
import styles from './Login.module.css'

export function Login(){
  return (
    <>
      <Header />
      <div className={styles.login}>
        <img src={logo} alt="Burguer Queer Logo" className={styles.main_logo}/>
        <Form /> 
      </div>
    </>
    
  )
}
