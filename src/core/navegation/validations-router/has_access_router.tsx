import { useLayoutEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth_helpers";

// import { Route, useHistory } from "react-router-dom";
export default function HassAccesRouter({ children }: any) {
	return getToken() ? <Navigate to='/home' /> : children
}
