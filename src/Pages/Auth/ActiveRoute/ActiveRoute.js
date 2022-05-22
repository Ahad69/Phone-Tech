import { Link, useMatch, useResolvedPath } from "react-router-dom";


function ActiveRoute({ children, to, ...props }) {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "red" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " "}
      </div>
    );
  }
  export default ActiveRoute;