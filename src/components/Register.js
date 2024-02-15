import { Link } from "react-router-dom";
import Navbar from "./Navbar";




function Register(){
    return(
        <div>

            <Navbar />
            <div class="container">
                <div class="column left">
                    <div class="content">
                        <h2>Sign Up</h2>
                        <p><strong>Alread Have An Account? <Link to="/login">Click here to login</Link> </strong></p>
                    </div>
                    
                </div>
                <div className="column right">
                    <div className="content">

                        <label for="Name">Name</label>
                        <input type="text" />

                        <label for="email">E-mail</label>
                        <input type="text" />

                        <label for="password">Password</label>
                        <input type="password" />
                        
                        <label for="password">Repeat Password</label>
                        <input type="password" />

                        <input type="submit" value="Login" />
                
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;