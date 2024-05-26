import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>{console.log(result)
      navigate("/login")
    })
    .catch(err=>console.log(err))
  }
    return(
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1 class="my-5 display-5 fw-bold ls-tight" >
              Welcome to <br />
              <span >Register Page</span>
            </h1>
            <p class="mb-4 opacity-70" >
              Login Details means the User name and password provided by THE to a registered Addressee or User for use of the portals and the platform.
            </p>
          </div>
    
          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
    
            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5">
                
                  
                  <div class="row">
                    
                    
  
                     
  
                    <h1 class="mb-3 h3">Register</h1>
                    
                  </div>
                  <form  onSubmit={handleSubmit}>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Name</label>
                    <input type="text" name="name" id="form3Example4" class="form-control" 
                    onChange={(e)=>setName(e.target.value)}/>
                    
                  </div>
    
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" name="email" id="form3Example3" class="form-control" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                    
                  </div>
    
                  
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Password</label>
                    <input type="password" name="password" id="form3Example4" class="form-control" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                    
                  </div>
    
    
                  
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Register
                  </button>
    
                
                  
                </form>
                <div class="text-center">
                    <p>already have an account  </p>
                    <Link to="/login" type="submit" class="btn btn-primary btn-block mb-4">
                     Login
                  </Link>
                  
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    
    )
}
export default Signup;