import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styles from "./AddUser.module.css"
import { ErrorModal } from "../UI/ErrorModal";


export const AddUser = ({updateDta}) => {

    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [message, setMessage] = useState("Something went wrong!")
    const onSubmit = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return  setMessage("Fill in all the fields!")
        };
        
        if (+age < 1) {
            return setMessage("Years cannot be a negative number")
        };
        
        updateDta(username, age);

        setUsername("");
        setAge("");

    }

    return (<>
        <ErrorModal title="An error has occurred!" message={message}/>
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
        </Card>
        </>
    )
}