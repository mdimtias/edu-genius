import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import './Login.css';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const LogIn = () => {
    const {login, providerLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [user, setUser] = useState({
		email:"",
		password:""
	});

const handleSubmit = (e)=>{
    e.preventDefault()
    const email = user.email;
    const password = user.password;
    
    login(email, password)
    .then(res=>{
      toast.success("Login Successful!")
      return navigate(from, { replace: true });
    })
    .catch(error=>toast.error("Login Fail Wrong Email And Password!"))

   

}

const handleGoogle =async ()=>{
  await providerLogin(providerGoogle)
  .then(res=>{
    toast.success("Login Successful!")
    return navigate(from, { replace: true });
  })
  .catch(error=>toast.error("Login Fail!"))
}
const handleGithub =async ()=>{
  await providerLogin(providerGithub)
  .then(res=>{
    toast.success("Login Successful!")
    return navigate(from, { replace: true });
  })
  .catch(error=>toast.error("Login Fail!"))
}


    return (
        <div className="p-8">
          <div className="p-8 rounded-lg shadow-lg bg-white max-w-md center-form">
            <form onSubmit={handleSubmit}>
             
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput"
                  placeholder="Email"
                  onChange={(e)=>setUser({...user, email: e.target.value})} />
              </div>
             
              <div className="form-group mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Password" 
                  onChange={(e)=>setUser({...user, password: e.target.value})} />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-center items-center gap-3 p-3 provider-btn">
                <button onClick={handleGoogle}><img src="https://img.icons8.com/color/2x/google-logo.png" alt="" /></button>
                <button onClick={handleGithub}><img src="https://img.icons8.com/ios-filled/2x/github.png" alt="" /></button>
            </div>
        </div>
        </div>
    );
};

export default LogIn;