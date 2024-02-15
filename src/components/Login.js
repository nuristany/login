import { Link } from "react-router-dom";
import Navbar from "./Navbar";




function Login(){
    return(
        <div>

            <Navbar />

<div class="container">
        <div class="column left">

            <div class="content">
                
                <h2>Login</h2>
                <p><strong>Don't have an account? <Link to="/register">Click here to register</Link></strong></p>

            </div>
            
        </div>
        
        <div className="column right">
            <div className="content">
                <label for="email">E-mail</label>
                <input type="text" />
                <label for="password" id="password" name="password">Password</label>
                <input type="password" />

                <input type="submit" value="Login" />

            </div>

        </div>

    </div>

        </div>
    )
}

export default Login;