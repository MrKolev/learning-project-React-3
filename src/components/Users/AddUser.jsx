import { useState, useRef } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import styles from "./AddUser.module.css"
import { ErrorModal } from "../UI/ErrorModal";


export const AddUser = ({updateDta}) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const enterName = nameInputRef.current.value;
        const enterAge = ageInputRef.current.value;
        if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                title: "Invalid input!",
                message: "Fill in all the fields!"
            });
            return 
        };
        
        if (+enterAge < 1) {
            setError({
                title: "Invalid age!",
                message: "Years cannot be a negative number"
            });
            return 
        };
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        
        updateDta(enterName, enterAge);

    }
    
    const onConfirmF = () => { 
        setError(null);
     }


    return (<>
        {error && <ErrorModal onConfirm={onConfirmF} title={error.title} message={error.message}/>}
        <Card className={styles.input}>
            <form onSubmit={onSubmit}>
                <label htmlFor="username" >Usernam</label>
                <input
                type="text" 
                id="username" 
                ref={nameInputRef} />
                <label htmlFor="age">Age (Years)</label>
                <input 
                type="number" 
                id="age" 
                ref={ageInputRef} />
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
        </>
    )
}