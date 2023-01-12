import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div  className="navbar">

    <Link to="/task">
        <p>Task</p>
      </Link>

      <Link to="/login">
        <p>Login</p>
      </Link>

      <Link to="/signup">
        <p>Signup</p>
      </Link>

    
      

    </div>
  );
}