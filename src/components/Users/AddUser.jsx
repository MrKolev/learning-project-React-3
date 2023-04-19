import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styles from "./AddUser.module.css"


export const AddUser = (props) => {

    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(age);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={onSubmit}>
                <label htmlFor="username" >Usernam</label>
                <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" onChange={(e)=>setAge(e.target.value)}/>
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
    )
}