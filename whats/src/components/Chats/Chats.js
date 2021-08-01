import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import React from 'react'
import { useState, useEffect } from 'react'
import classes from './Chats.module.css'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom'
import database from '../../firebase'
import {useContext} from 'react'
import AuthContext from '../../store/AuthContext'
import firebase from 'firebase'
function Chats(props) {
    const [person, setperson] = useState('')
    const[input, setInput] = useState('')
    const {roomsId} = useParams()
     const [roomname, setRoomname] = useState('')
     const[message, setMessage] = useState([])
     const[{user}, dispatch]  = useContext(AuthContext)
     useEffect(()=>{
         if(roomsId){
         database.collection("Rooms").doc(roomsId).onSnapshot((snapshot)=> setRoomname(snapshot.data().Name))

         database.collection('Rooms').doc(roomsId).collection("message").orderBy("time","asc").onSnapshot(snapshot => {
            setMessage(snapshot.docs.map(doc => doc.data()))
        });
    }
     }, [roomsId])

    useEffect(()=>{

        setperson(Math.floor(Math.random()*5000))
    }, [roomsId])

    const sendMessage =(event)=>{
        event.preventDefault()
        database.collection('Rooms').doc(roomsId).collection("message").add({
            message:input,
            Name:user.displayName,
            time:firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('')
    }
    const onChangeHandler=(event)=>{
        setInput(event.target.value)
    }
    return (
        <div className={classes.Chat}>
            <div className={classes.chatHeader}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${person}.svg`}/>
            <div className={classes.headerInfo}>
                <h3>{roomname}</h3>
                <p>last seen {" "}{new Date(message[message.length - 1]?.time?.toDate()).toUTCString()}  </p>
            </div>
            <div className={classes.headerRight}>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            </div>
            <div className={classes.chatBody}>
            {message.map((message)=>(
                <p className={`${classes.chatMessage} ${message.Name===user.displayName?classes.chatRight:''}`}>
                <span className={classes.chatName}>{message.Name}</span>
                {message.message}
                <span className={classes.Time}>{new Date(message.time?.toDate()).toUTCString()}</span>
                </p>
            ))}
            </div>
            <div className={classes.chatFooter}>
            <MoodIcon/>
            <form>
            <input type='text' placeholder='Type a message' value={input} onChange={onChangeHandler}></input>
            <button onClick={sendMessage} type='submit'><SendIcon/></button>
            </form>
            <MicIcon/>
            </div>
        </div>
    )
}

export default Chats