
import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';
import List from './Components/List';
import Navbare from './Components/Navbar';

function App() {

  const users= [
  {id:0, name:'fedi', age:25},
  {id:1, name:"marwa", age:24}, 
  {id:2, name:"sarra", age:25},
  {id:3, name:"saber", age:26}]
const [login,setlogin]=useState(false)
  return (
    <div className="App">
      <Navbare   login={login} setlogin={setlogin}  ></Navbare>

      <Route exact  path='/'    component={Home}    ></Route>
      {/* <Route  path='/users'   >   <List  users={users}  ></List>   </Route> */}
      <Route  path='/users'  render={()=>  <List   users={users} login={login}    ></List>  }     /> 
      <Route    path='/details/:id'       render={(props)=> <Details {...props}  users={users}   ></Details> }    ></Route>   
    </div>
  );
}

export default App;
