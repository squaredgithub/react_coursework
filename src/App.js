import './App.css';

import States from './states_hooks';

import {User} from './User'

function App() {

  //jsx starts here
  const name = "njuguna";
  const age = "22";
  const age1 = 17;
  const email = "test@gmail.com";
  const isGreen =true;
  const user = (
   <div>
    {name}
    {age}
    {email}
   </div>
   
  ); 
  const users = [
    {name: "Omusula", age: 22},
    {name: "Willy", age: 23},
    {name: "Paul", age: 20},
  ];
  return (
    <div className="App">

      <States />
       <User />

       {user}
       {user}
       {user}
       <Work salary={6000} pos="se" compa="Google" />
       <Work salary={9000} pos="sales" compa="Microsoft" />
       {users.map((user, key) => {
      return <User name={user.name} age={user.age} />
    })}


       {age1 >= 18 ? <h1> OVER AGE</h1> : <h1> under age</h1>}

       <h1 style ={{color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>
       {isGreen && <button>This is a button</button>}

       
    


    </div>
  );
}
//function
// const getName = () =>{
//   return "njuguna"
// };
//components start with capital
// const User = () =>{
//   return <h1>njuguna</h1>
// }; 

const Work = (props) =>{
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.pos}</h1>
      <h1>{props.compa}</h1>

    </div>
  );
}; 


 



export default App;
