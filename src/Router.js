import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from './component/Main';
import Modify from './component/Modify';
import Pay from './component/Pay';
import Sell from './component/Sell_Items';
export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="main" component={Main} title="Login" initial={true}/>
			      <Scene key="Pay" component={Pay} title="Pay" />
						<Scene key="Modify" component={Modify} title="Modify" />
						<Scene key="Sell" component={Sell} title="Sell" />
			    </Stack>
			 </Router>
			)
	}
}