import { Card } from "../UI/Card";
import styles from "./AddUser.module.css"


export const AddUser = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(e.target);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={onSubmit}>
                <label htmlFor="username" >Usernam</label>
                <input type="text" id="username" name="name" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" name="age" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}