import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import { Grid } from "../elements";

const Main = (props) => {

	return (
		<React.Fragment>
			<Grid margin="0px auto" width="1050px">
				<Header/>
				<Body/>
			</Grid>
		</React.Fragment>
	);

};


export default Main;