import React from "react";
import styled from "styled-components";
import Body from "../components/Body";
import Header from "../components/Header";
import Title from "../components/Title";
import { Grid } from "../elements";
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { styled } from "@material-ui/core";
import { history } from "../redux/configStore";

const Main = (props) => {

	return (
		<React.Fragment>
			<Grid margin="0px auto" width="1050px">
				<Title/>
				<Header/>
				<Body/>
			</Grid>
			<AddBox onClick={() => {history.push('/add')}}>
				<AddCircleIcon style={{ fontSize: 70}}/>
			</AddBox>
		</React.Fragment>
	);

};

const AddBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: none;
	/* color: #ffffff; */
	
	position: fixed;
	bottom: 20px;
	right: 25%;

	width: 80px;
	height: 80px;
	border-radius: 40px;
	
	/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
	
	${AddCircleIcon} {
		transition: transform 600ms ease-in-out;
	}

	&:hover {
		${AddCircleIcon}{
			transform: rotate(3600deg);
		}
	}
`;

export default Main;