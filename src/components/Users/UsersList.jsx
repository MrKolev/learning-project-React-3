import { Card } from "../UI/Card"
import styles from "./UsersList.module.css"



export const UserList = ({users}) => {
    return (
        <Card className={styles.users}>
            <ul>{users.map((user) => {return <li key={user.id}>{user.name} ({user.age} years old)</li>})}
            </ul>
        </Card>
    )
}