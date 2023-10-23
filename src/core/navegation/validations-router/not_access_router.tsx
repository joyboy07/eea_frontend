import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/auth_helpers";

// import { Route, useHistory } from "react-router-dom";
export default function NotAccesRouter({ children }: any) {
	return !getToken() ? <Navigate to='/login' /> : children
}
