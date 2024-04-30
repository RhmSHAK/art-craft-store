import { useContext } from "react";
import { AuthContext } from "../AuthOrovider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
     
    if(loading){
        return <span className="loading text-center loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node
}