import classes from './Login.module.css'
import React from 'react'
import { Button, useIsFocusVisible } from '@material-ui/core'
import { Auth, provider} from '../../firebase'
import AuthContext from '../../store/AuthContext'
import { useContext } from 'react'
import {actionTypes} from '../../Reducer'
import Card from '../UI/Card/Card'
import Buttonn from '../UI/Button/Button'
function Login() {
    
    const [{}, dispatch] = useContext(AuthContext)
    const signIn = ()=>{
        Auth.signInWithPopup(provider).then((result)=>{
             dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
        
    }).catch((error)=>alert(error.message))
}

    return (
        <Card className={classes.login}>
                <div className={classes.actions}>
                <div className={classes.control}>
                <div className={classes.join}>
           <h1>Wanna join Us</h1>
           </div>
           <div className={classes.small}>
           <h6>Have some fun</h6>
           </div>
            </div>
                <Button onClick={signIn} className={classes.btn} >Login with Email</Button>
                </div>
        </Card>
            )
}

export default Login

