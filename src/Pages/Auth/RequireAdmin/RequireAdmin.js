import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/userAdmin";


function RequireAdmin({ children }) {

    const [user, loading, error] = useAuthState(auth);
    const [admin , isLoading] = useAdmin(user)
    let location = useLocation();
  

    if(loading || isLoading){
        return <div className=" pt-80 pb-80">
            <svg style={{borderRadius:"50%"  , borderTop:"15px solid red" ,borderBottom:"15px solid red" , margin: 'auto'}} className="animate-spin h-20 w-20  bg-transparent  border-orange-600 ..."> </svg>
        </div>
    }
    if (!admin || !user) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
  }
  export default RequireAdmin;