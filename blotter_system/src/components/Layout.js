import Navbar from './nav.js';
import { Route, Switch } from 'react-router-dom';
const Layout = (props) => {
	return (
		<>
			<Navbar />
			<>{props.children}</>
		</>
	);
};

export default Layout;
