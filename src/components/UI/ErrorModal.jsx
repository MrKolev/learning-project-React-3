import styles from './ErrorModal.module.css'
import { Card } from "./Card"
import { Button } from './Button'
import { Fragment } from 'react'

 const Backdrop = ({ onConfirm }) => {
    return <div className={styles.backdrop} onClick={onConfirm} />
}

 const ModalOverlay = ({ title, message, onConfirm }) => {
    return (
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
                <Button onClick={onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}


export const ErrorModal = ({ title, message, onConfirm }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.getElementById("backdrop-root"))
            }
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={title}
                    message={message}
                    onConfirm={onConfirm} />,
                document.getById("overlay-root"))
            }
        </Fragment>
    )
}