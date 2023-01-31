import NavBar from "./NavBar";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom"

import {useState, useRef} from"react";
import {set,ref,get,child } from "firebase/database";
import db from "./FirebaseConfig";

function Update(){
	const rNo=useRef();
	const [rno,setRno]=useState("");
	const [name,setName]=useState("");
	const [marks,setMarks]=useState("");

	const hRno=(event)=>{setRno(event.target.value);}
	const hName=(event)=>{setName(event.target.value);}
	const hMarks=(event)=>{setMarks(event.target.value);}

//1

const nav=useNavigate(); 

useEffect(()=>{
const un=localStorage.getItem("un");
if(un==null)
nav("/login");
},[]);
//2
	const save=(event)=>{
	event.preventDefault();
if(name.trim().length==0)
	{
	alert("empty spaces not allowed ");
	return;
	}
	let r1=ref(db);
	get(child(r1,"student/"+rno))
	.then((ss)=>{
	if(ss.exists())
	{
let r2=ref(db,"/student/"+rno);
let data={rno,name,marks};
set(r2,data);
alert("Record Updated");
setRno("");
setName("");
setMarks("");
rNo.current.focus();
}
else
{
alert(rno+"  does not exists");
setRno("");
setName("");
setMarks("");
rNo.current.focus();
}
})	
.catch(err=>console.log(err))
}

	return(
	<>
	<center>
<NavBar/>
<div class="regfrom"><h1>Update Student Informtaion</h1>
</div>
      <div class="main">

	<br/>
	<form onSubmit={save}>
	<input type="number" placeholder="Enter roll number"  min ="1" required onChange={hRno} value={rno} ref={rNo}/>
	<br/><br/>
	<input type="text" placeholder="Enter name" pattern="[A-Za-z ]+" required onChange={hName} value={name} />
	<br/><br/>
	<input type="number" placeholder=" marks" min="0" max="100"  required onChange={hMarks} value={marks} />
<br/><br/>	
	<input type="submit" value="Update"/>
<br/><br/>	
</form>
</div>
</center>
</>
		);

}
export default Update;