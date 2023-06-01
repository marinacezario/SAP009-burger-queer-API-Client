import styles from './Button.module.css'

export function Button(){
    return (
        <input type="submit" alt="Login Button" value='login' className={styles.btnSend}/>
    )
}