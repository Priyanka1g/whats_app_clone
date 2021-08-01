
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Chats from './components/Chats/Chats'
import { useContext} from 'react';
import Login from './components/Login/Login';
import AuthContext from './store/AuthContext';
// import ErrorModal from './components/ErrorModal/ErrorModal';
function App() {
  const [{user}, dispatch]  = useContext(AuthContext)
  // const [roomName, setRoomName] = useState('')
  // const [show, setShow ] = useState(false)
  // const onAddHandler =(enteredUserName)=>{
  //   setRoomName(enteredUserName)
  // }
  
  // const AddHandler =()=>{
  //   setShow(true)
  // }

  // const ClickHandler =()=>{
  //   setShow(false)
  // }
  return (
    
    <div className='app'>
    {!user ? (
      <Login/>
    ):
    (
      <div className='app-body'>
      {/* {show&&<ErrorModal onAddHandler={onAddHandler} onClick = {ClickHandler}/>} */}
      <SideBar/>
      <Switch>
      <Route path='/rooms/:roomsId' exact>
      <Chats/>
      </Route>
  
      <Route path='/' exact>
      <Chats/>
      </Route>
      </Switch>
      </div>
    )}
     
    </div>
  );
}

export default App;