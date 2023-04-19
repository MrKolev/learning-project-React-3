import styles from './Button.module.css'

export const Button = ({type,onClick,children}) => {
    return <button type={type || 'button'} onClick={onClick} className={styles.button} >
        {children}
    </button>
}
