import { Route, Switch } from 'react-router-dom';
import BlotterModule from './components/Blotter-Module';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const BaseRouter = () => (
	<>
		<Switch>
			<Route exact path="/" component={BlotterModule} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
		</Switch>
	</>
);

export default BaseRouter;
