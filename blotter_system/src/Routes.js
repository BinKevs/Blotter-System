import { Route, Switch } from 'react-router-dom';
import BlotterModule from './components/Blotter-Module';
import Login from './components/Login';

const BaseRouter = () => (
	<>
		<Switch>
			<Route exact path="/" component={BlotterModule} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</>
);

export default BaseRouter;
