import jwt_decode from 'jwt-decode';
import { Navigate } from "react-router-dom";
import { RoleType } from "../../enum/enum";
import { getToken } from "../../utils/auth_helpers";

export default function ProtedRouterReport({ children }: any) {
	var decoded: any
	decoded = jwt_decode(getToken()!);
	return decoded.rol == RoleType.Operador ? <Navigate to='/home' /> : children
}
