import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import State from './Component/State';
import Array from './Component/Array';
import PropsData from './Component/PropsData';
import KeyIn from './Component/KeyValue';
import { EventHandler } from './Component/EventHandler';
import KeyValue from './Component/KeyValue';
import Forms from './Component/Forms';
import DynamicInputs from './Component/DynamicInputs';
import CssInternal from './Component/CssInternal';
import Uncontrolled from './Component/Uncontrolled';
import ControlledComponent from './Component/ControlledComponents';
import InnerHtml from './Component/InnerHtml';
import Fragmentation from './Component/Fragmentation';
import Read from './Component/read/Read';
import Create from './Component/read/Create';
import Badge from './Component/shoppingCard/Badge';
import Card from './Component/shoppingCard/Card';



function App() {
  const[users,setUsers]=useState([])
  const[name,setName]=useState("sindu")
  const[numbers,setNumbers]=useState([1,2,3,4,5,6,7,8,9,10])
  // useEffect(()=>{
  //   fetch("http://jsonplaceholder.typicode.com/users")
  //   .then((response) =>response.json())
  //   .then((json) =>setUsers(json))

  // },[]);
// const mapData =() =>{

//   // let square = numbers.map((number) => {
//   //   return number*number;
//   let numberLessThan5 = numbers.filter((number) => {
//     return number >= 5

//   }).map((filtered)=>{
//     return filtered * filtered;
//   })
//   setNumbers(numberLessThan5)

  
//   console.log(numberLessThan5);
//   // map works
//   // let mappedArray =users.map((user) =>user.id * 2)
//   // console.log(mappedArray);
//   // let filterData = users.filter((user)=>{
//   //   return user.id >= 5
//   // })
//   // console.log(filterData);
//   // setUsers(filterData)
// }

// const changeName = (value) =>{
//   console.log(value);
//   setName(value)
// }
// useEffect = (() => {
//   let age =26;
//   let name="padmavathi"
//   // if(age > 26){
//   //   console.log("your are now old");

//   // }
//   // else if(name === "padmavathi" && age === 26){
//   //   console.log("i am 26 years old");
//   //   console.log("my name is padmavathi");
//   // }
//   // else{
//   //   console.log("padmavathi is not myname");
//   //   console.log("i am not 26 years of old");
//   // }
 
// }, [])
  return (
    <div className="App">
     {/* <h1>Numbers</h1> */}
     {/* <div className="card">
      {users.map((user) => (
        <div className="card-inner">
        <p>{user.name}</p>
        <p>{user.username}</p>
        
        </div>
    
      ))} */}
      {/* <div className="card">
       {numbers.map((num) =>(
        <div >{num}</div>
       ))}
      </div> */}
         
     

     {/* <State/>
     <Array/> */}
     {/* <PropsData value={name} changeName={changeName}/> */}

{/* <EventHandler/> */}
{/* <KeyValue/> */}
{/* <Forms/> */}
   {/* <DynamicInputs/> */}
   {/* < CssInternal/>
    */}
{/* <Uncontrolled/>
<ControlledComponent/> */}
{/* <InnerHtml/> */}
{/* <Fragmentation/> */}
{/* <Read/> */}
{/* <Create/>
 */}

{/* <Flex/> */}
<Badge/>
<Card/>
    </div>
  );
}


export default App;
