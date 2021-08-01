import classes from "./Button.module.css"
const Buttonn =(props)=>{
    return(
        <button 
        type={props.type || 'button'}
        className={classes.button}
        onClick={props.onClick}
        >
        {props.children}
        </button>
    )
}

export default Buttonn