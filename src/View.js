import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom"


import db from "./FirebaseConfig"
import {get,ref,child,remove} from "firebase/database";
import {useState,useEffect } from "react";

function View()
{


const nav=useNavigate(); 

useEffect(()=>{
const un=localStorage.getItem("un");
if(un==null)
nav("/login");
},[]);



const[info,setInfo]=useState([]);
useEffect(()=>{
let r=ref(db);
get(child(r,"student/"))
.then((ss)=>{

if(ss.exists())
{
setInfo([]);
let data=ss.val();
console.log("data=",data);
Object.values(data).map((d)=>{
setInfo((olddata)=>[...olddata,d]);
});
console.log("info",info);
}
else
{
console.log("No data found");
}
})
.catch(err=>console.log(err));
},[]);

const delStu=(rno)=>{
let r =ref(db,"student/"+rno);
remove(r)
.then(()=>{
alert(rno+" deleted");
window.location.reload();


})
.catch(err=>console.log(err));
}


return(
<>
<center>
<NavBar/>
 <div class="regfrom"><h1>View</h1></div>
      <div class="main">

<table border="5" style={{width:'70%'}} style={{"color":"white"}}>
<tr>
<th>Rno</th>
<th>Name</th>
<th>Marks</th>
<th>Delete</th>
</tr>
{
info.map((e=>
<tr style={{"text-align":"center"}}>
<td>{e.rno}</td>
<td>{e.name}</td>
<td>{e.marks}</td>
<td><button onClick={()=>{if (window.confirm('Are you sure'))delStu(e.rno)}}>Delete</button></td>
</tr>
))
}
</table>
 </div>
</center>
</>
);
}
export default View;

