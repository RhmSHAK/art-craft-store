import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthOrovider/AuthProvider";
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import Swal from "sweetalert2";


const Register = () => {

  const {createUser,updateUserProfile,LogOut,setLoading} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);
  const [registerError,setRegisterError] = useState(' ');

  const navigate = useNavigate();

    const handleRegister= e =>{

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value ;


        console.log(name,email,password,image);

        //password condition--------------
       if(password.length < 6){
        setRegisterError('Length must be at least 6 character or longer');
        return;
     }
     else if(!/[A-Z]/.test(password)){
        setRegisterError(' Must have an Uppercase letter in the password')
        return;
     }
     else if(!/[a-z]/.test(password)){
        setRegisterError('Must have an Lowercase letter in the password')
        return;
     }


        //create user
        createUser(email,password) 
        .then( result => {
          console.log(result.user);
          e.target.reset();
          updateUserProfile(name,image,email)
          .then()
            navigate( "/login")
            Swal.fire({
              title: ' success!',
              text: 'Registration Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            LogOut();
        } )
        .catch(error => {
          console.log(error);
          setLoading(false);
 Swal.fire({
  title: ' Error!',
  text: 'Login Error',
  icon: 'Error',
  confirmButtonText: 'Cool'
})
        })

       
        
    }


    return (
        
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
  <div className="text-center ">
          
          <h1 className="text-5xl font-bold">Registration now!</h1>
          
        </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
        </div>

        <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input type="text" placeholder="image url" name="image" className="input input-bordered" required />
              </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">

                   <input
                        type={ showPassword ? "text" : "password"} //condition
                            placeholder="password"
                             name="password" 
                              className="input w-full input-bordered" 
                               required />

                       <span  className=" absolute mt-4 -ml-6 " onClick={()=>setShowPassword(!showPassword)}>

                      {/* react icons */}
                         <div className="  ">
                          {
                              showPassword ? <FaEye ></FaEye>: <FaEyeSlash></FaEyeSlash> 
                           }
               </div>
           </span>

        </div>
          
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      {/* error sms */}
      {
                   registerError && <p className="text-red-600">{registerError}</p>
                 }

      <p className="text-center mb-4 mx-6 ">Already have account? Please <Link to="/login"> 
      <button className="btn btn-link">Login</button>
      </Link> </p>

    </div>
  </div>
</div>
    );
};

export default Register;