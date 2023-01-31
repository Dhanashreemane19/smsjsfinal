import {Link} from "react-router-dom";
function NavBar()
{

const un=localStorage.getItem("un"); 
return(

<>
<center>

<div className="nav">


{(un==null) && (<Link to="/login">Login</Link>)}
{(un==null) && (<Link to="/signup">Sign Up</Link>)}
{(un==null) && (<Link to="/fp">Forgot Password</Link>)}

{(un!=null) && (<Link to="/home">Home</Link>)}
{(un!=null) && (<Link to="/view">View</Link>)}
{(un!=null) && (<Link to="/create">Create Student</Link>)}

{(un!=null) && (<Link to="/update">Update</Link>)}
{(un!=null) && (<Link to="/cp">Change Password</Link>)}

</div>
</center>
</>
);
}
export default NavBar;
