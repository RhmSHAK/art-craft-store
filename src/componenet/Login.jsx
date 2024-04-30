import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthOrovider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

  const {singInUser,singInGoogle,singInGithub} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email,password);

    singInUser(email,password)
      .then(result=>{
        console.log(result.user);
        e.target.reset();
        //updateUserProfile(name,image)
        //navigate('/');
        if(result.user){
          navigate(location?.state || "/");
          
        }
        Swal.fire({
          title: ' success!',
          text: 'Login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch(error=>{
        console.log(error);
      })
}

//Google Login
const handleGoogleLog = () =>{
singInGoogle()
.then(result =>{
  console.log(result.user);
  navigate('/');
  if(result.user){
    navigate(location?.state || "/");
  }
  Swal.fire({
    title: ' success!',
    text: 'Login Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
})
.catch(error=>{
  console.error(error);
  alert(error)
})
}

//Github Login
const handleGithubLog = () =>{
singInGithub()
.then(result =>{
  console.log(result.user);
  navigate('/');
  if(result.user){
    navigate(location?.state || "/");
  }
  Swal.fire({
    title: ' success!',
    text: 'Login Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
})
.catch(error=>{
  console.error(error);
  alert(error);
})
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
  <div className="text-center ">
          
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-4 mx-6 ">New to this website? Please <Link to="/register"> 
      <button className="btn btn-link">Register</button>
      </Link> </p>

      <div className="flex justify-around">
      <p>
      <button onClick={handleGoogleLog}  className="mx-6 mb-4 btn btn-ghost">Google</button>
      </p>
      <p>
      <button onClick={handleGithubLog}  className="mx-6 mb-4 btn btn-ghost">GitHub</button>
      </p>
      </div>


    </div>
  </div>
</div>
    );
};

export default Login;