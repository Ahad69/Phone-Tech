import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";


function RequireAuth({ children }) {

    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
  

    if(loading){
        return <div className="bg-black pt-80 pb-80">
            <svg style={{borderRadius:"50%"  , borderTop:"15px solid red" ,borderBottom:"15px solid red" , margin: 'auto'}} className="animate-spin h-20 w-20  bg-transparent  border-orange-600 ..."> </svg>
        </div>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
  export default RequireAuth;