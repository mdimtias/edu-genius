import React, {useContext, useState} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../App';
import './Register.css'
const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);

    const [user, setUser] = useState({
		name:"",
		email:"",
		password:"",
    number:""
		
	});
	const [error, setError] = useState({
		name:"",
		email:"",
    number:"",
		password:"",
		button: "",
    disabled: true
	});
	const handleName = ()=>{
		if(user.name.length < 4){
			setError({...error, name: "Please Enter Your Full Name", disabled:true});
		}else{
			setError({...error, name: ""});
		}	
	}
	
	const handleEmail = ()=>{
		const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email);
		if(!emailValidation){
      setError({...error, email:"Please Enter Correct Email", disabled:true});
		}else{
			setError({...error, email:""});
		}
	}
	
    const handleNumber = ()=>{
        if(user.number.length < 7){
            setError({...error, number: "Please Enter Your Correct Number", disabled:true});
        }else{
            setError({...error, number: ""});
        }
    }

	const handlePassword = (e)=>{
        e.preventDefault();
		const checkNumber = /[0-9]/.test(user.password);
		const checkLetter =/[a-z]/.test(user.password);
		const checkSpecialCharectar =/[!@#$%^&*]/.test(user.password);
		if (user.password.length < 8){
			setError({...error, password: "Your password must be at least 8 characters"});
           
		}else if(!checkNumber){
			setError({...error, password: "Your password must contain at least one digit."});
           
		}else if(!checkLetter){
			setError({...error, password: "Your password must contain at least one letter."});
           
		}else if(!checkSpecialCharectar){
			setError({...error, password: "Your password must contain at least one Special character."});
          
		}else {
			setError({...error, password: "", disabled:false});
		}
		
	}
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user.name, user.email, user.password, user.number)
    const name = user.name;
    const email = user.email;
    const number = user.number;
    const password = user.password;
    
    createUser(email, password)
    .then(res=>{
      updateUser(name, number)
      .then(res=>toast.success("Registration Successful!"))
      .catch(error=>toast.error("Registration Fail"))
    })
    .catch(error=>toast.error("This email already in use"))

   

}
    return (
        <div className="p-8">
          <div className="p-8 rounded-lg shadow-lg bg-white max-w-md center-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Full Name"
                  onChange={(e)=>setUser({...user, name: e.target.value})} 
                  onBlur={handleName} />
              <p className='text-red-500 font-bold'>{error.name}</p>
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email"
                  onChange={(e)=>setUser({...user, email: e.target.value})} 
                  onBlur={handleEmail} />
                 <p className='text-red-500 font-bold'>{error.email}</p>
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Phone Number"
                  onChange={(e)=>setUser({...user, number: e.target.value})} 
                  onBlur={handleNumber}
                />
                 <p className='text-red-500 font-bold'>{error.number}</p>
              </div>
              <div className="form-group mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Password" 
                  onChange={(e)=>setUser({...user, password: e.target.value})} 
                  onBlur={handlePassword} />
                  <p className='text-red-500 font-bold'>{error.password}</p>
              </div>
              <button
                type="submit"
                disabled={error.disabled}
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Register 
              </button>
            </form>
        </div>
        </div>
    );
};

export default Register;