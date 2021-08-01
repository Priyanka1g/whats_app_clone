import React from 'react'
import { useState, useEffect } from 'react';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import classes from './SideBarChat.module.css'
import { Avatar } from '@material-ui/core';
import database from '../../firebase';
import {Link} from 'react-router-dom'
function SideBarChat(props) {
    const [person, setperson] = useState(' ')
    const[message, setMessage] = useState('')
    useEffect(()=>{
        setperson(Math.floor(Math.random()*5000))
    }, [])

    useEffect(()=>{
        if(props.id){

        database.collection('Rooms').doc(props.id).collection("message").orderBy("time","asc").onSnapshot(snapshot => {
           setMessage(snapshot.docs.map(doc => doc.data()))
       });
   }
    }, [props.id])

    const createChat = ()=>{
        const roomName = prompt('Enter Room Name')

    if(roomName){
        database.collection('Rooms').add({
            Name:roomName
        })
    }
    }
    return !props.addNewChat ? (
        <Link to={`/rooms/${props.id}`}>
        <div className={classes.sideBarChat}>
        {/* <AccountCircleIcon/> */}
        <Avatar src={`https://avatars.dicebear.com/api/human/${person}.svg`}/>
        <div className={classes.sideBarChatInfo}>
        <h2>{props.name}</h2>
        <p>{message[message.length-1]?.message}</p>
        </div>
        </div>
        </Link>
    ):(
        <div onClick={createChat} className={classes.sideBarChat}>
        <h2> Add Your New Room </h2>
        </div>
    )
}
export default SideBarChat
