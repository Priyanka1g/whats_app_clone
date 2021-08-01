import React, { useEffect, useReducer } from 'react'
import { useState } from 'react';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classes from './SideBar.module.css'
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideBarChat from './SideBarChat';
import database from '../../firebase';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
function SideBar(props) {
    const [room, setRoom] = useState([])
    const [{user}, dispatch]  = useContext(AuthContext)
    useEffect(()=>{
        const cleanup = database.collection("Rooms").onSnapshot((snapshot)=>
        setRoom(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        ))
        return()=>{
            cleanup()
            
        }
    }, [])
    return (
        <div className={classes.sideBar}>
            <div className={classes.sideBarHeader}>
            {/* <AccountCircleIcon/>
             */}
             <Avatar src={user?.photoURL}/>
            <div className={classes.sideBarHeaderRight}>
            <IconButton>
            <DonutLargeIcon/>
            </IconButton>
            <IconButton>
            <ChatIcon/>
            </IconButton>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
            </div>
            </div>
            <div className={classes.sideBarSearch}>
            <div className={classes.sideBarSearchContainer}>
                 <SearchOutlinedIcon/>
                 <input placeholder="Search or Start New Chat" type='text'/>
            </div>
            </div>
            
            <div className={classes.sideBarChats}>
                 <SideBarChat addNewChat  />
                 {room.map(room=>(
                     <SideBarChat key={room.id} id={room.id} name={room.data.Name}/>
                 ))}
            </div>
        </div>
    )
}

export default SideBar
