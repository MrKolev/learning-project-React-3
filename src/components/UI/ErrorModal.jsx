import styles from './ErrorModal.module.css'
import { Card } from "./Card"
import { Button } from './Button'


export const ErrorModal = ({ title, message }) => {
    return (
        <>
            <div className={styles.backdrop} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button>Okay</Button>
                </footer>
            </Card>
        </>
    )
}