import {
	BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import NotFoundPage from './../../app/layout/error_404';
import HomePage from "../../feature/home/presentation/home_page";


function Routers() {
	return (
		<div >
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default Routers;