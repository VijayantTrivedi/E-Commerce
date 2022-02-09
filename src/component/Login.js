import React, { useState } from 'react'

const Login = () => {
     const [name,setName] = useState('');
     const [email,setEmail] =useState('');
    const [pwd,setPwd]= useState('');

    const handle = () => {
        localStorage.setItem('Email',email);
        localStorage.setItem('Password',pwd);
    }

    return (
            <div className="container  ">
            <div className="row my-20">
                <div className="col-md-6 mx-auto">
                    <form className="login" >
                        <h4>Login Form</h4>
                        <div className="form-group">
                            <label htmlFor="text">UserName</label>
                            <input type="email" required className="form-control" name="" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" required className="form-control" name="" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" required className="form-control" name="" placeholder="Enter Your Password" onChange={(e) => setPwd(e.target.value)} />
                        </div> 
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary send-button m-4" onClick={handle} >Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>    
    )

}
export default Login;