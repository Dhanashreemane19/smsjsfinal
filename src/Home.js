import NavBar from "./NavBar";
import {useLocation,Navigate,useNavigate} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
import {useEffect, useState} from "react";

function Home()
{
	const[user,setUser]=useState();
	const nav=useNavigate();
	

	const lo =(event)=> {
		event.preventDefault();
		const auth =getAuth();
		localStorage.clear();
		signOut(auth)
		.then(res=> nav("/login"))
		.catch(err=> console.log(err))
	}
	const loc=useLocation();

	useEffect( ()=>{
		let u = localStorage.getItem("un");
		if(u== null)
			nav("/login");
		else
			setUser(u);
		},[])	
	return(

		<>
		<center>
			<NavBar/>
   <div class="regfrom"><h1> HomePage </h1></div>
      <div class="main">
			
			<h1 style={{"color":"white"}}> Welcome Admin {user} !!</h1>
			<form onSubmit={lo}>
				<input type="submit" value="Logout"/>
			</form>
</div>
		</center>
		</>
	);
}
export default Home;
