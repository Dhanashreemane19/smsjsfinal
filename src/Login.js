import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect } from "react";
function Login()
{
	const nav=useNavigate();
	useEffect( () => {
		const un=localStorage.getItem("un");
		if(un != null)
			nav("/home");
	},[]);

	const [un,setUn] = useState("");
	const [pw,setPw] = useState("");
	const [ans,setAns] = useState("");

	const hUn=(event)=> {setUn(event.target.value);}
	const hPw=(event)=> {setPw(event.target.value);}

	const check =(event)=> {
		event.preventDefault();
		const auth =getAuth();
		signInWithEmailAndPassword(auth,un,pw)
		.then(res=> {
			localStorage.setItem("un",un);
			nav("/")
})

.catch(err=>{
			if(err.code=="auth/wrong-password")
				{console.log(err);
				setAns("Wrong Password!!");
				}

			else if(err.code=="auth/user-not-found")
				{console.log(err);
				setAns("Sign up account first");
				}
else if(err.code=="auth/configuration-not-found")
				{console.log(err);
				setAns("Configuration not found");
				}
else if (err.code=="auth/invalid-email")
				{console.log(err);
				setAns("Invalid Email");
				}
			else if (err.code=="auth/too-many-requests")
				{console.log(err);
				setAns("Too many requests.Reset Password");
				}
			else{console.log(err);
				setAns("issue"+err);
			}
			
		})
}

	return(
		<>
		<center>
			<NavBar/>
<div class="regfrom"><h1> Login Page </h1></div>
      <div class="main">
			
			<form onSubmit={check}>
				<input type="email" placeholder="enter reg email" onChange={hUn}/>
				<br/><br/>
				<input type="password" placeholder="enter password" onChange={hPw}/>
				<br/><br/>
				<input type="submit" value="Login"/>
			</form>
				<h1 style={{"color":"white"}}> {ans} </h1>
</div>
		</center>
		</>
	);
}
export default Login;
