import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styles from "./AddUser.module.css"
import { UserList } from "./UsersList";


export const AddUser = (props) => {

    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return 
        };
        
        if (+age < 1) {
            return
        };
        
        
        setUsername("");
        setAge("");

    }

    return (
        <Card className={styles.input}>
            <form onSubmit={onSubmit}>
                <label htmlFor="username" >Usernam</label>
                <input
                type="text" 
                id="username" 
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
                <label htmlFor="age">Age (Years)</label>
                <input 
                type="number" 
                id="age" 
                onChange={(e) => setAge(e.target.value)}
                value={age} />
                <Button type="submit" >Add User</Button>
            </form>
            <UserList username={username} age={age} />
        </Card>
    )
}