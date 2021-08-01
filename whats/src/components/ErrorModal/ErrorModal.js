import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"
import { useState } from "react"
import classes from "./ErrorModal.module.css"
import database from "../../firebase"
const ErrorModal = (props) => {
    const[enteredUserName, setUserName] = useState('')
    const addUserHandler = (event)=>{
        event.preventDefault()
        props.onAddHandler(enteredUserName)
        setUserName('')
        
        const roomName ={enteredUserName}

    if(roomName){
        database.collection('Rooms').add({
            Name:roomName
        })
    }
    }
    const setUserHandler =(event)=>{
        setUserName(event.target.value)
    }

    return (
        <div className={classes.backdrop} >
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>CREATE YOUR ROOM</h2>
                </header>
                <form onSubmit={addUserHandler} className={classes.form}>
                    <label htmlFor="username" className={classes.label} >RoomName</label>
                    <input id="username" type="text" value={enteredUserName} className={classes.input} onChange={setUserHandler} />
                    <Button type="submit" onClick={props.onClick}>Add Room</Button>
                </form>
            </Card>
        </div>
    )
}

export default ErrorModal