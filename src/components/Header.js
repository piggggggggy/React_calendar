import React from "react";
import styled from "styled-components";
import { Btn, Text } from "../elements";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as dateActions } from "../redux/modulse/date";

const Header = (props) => {
 
	const dispatch = useDispatch();
	const current = useSelector((state) => state.date.current);
	const HeaderDate = current.clone().format("YYYY.MM");

	const goToLast = () => {
		dispatch(dateActions.setCur(current.clone().subtract(1,"month")));
	};
	const goToNext = () => {
		dispatch(dateActions.setCur(current.clone().add(1, "month")));
	};

	return (
		<React.Fragment>
			<HeaderContainer>
				<Toggle onClick={goToLast}>◀</Toggle>
				<Text bold size="60px"> {HeaderDate} </Text>
				<Toggle onClick={goToNext}>▶</Toggle>
			</HeaderContainer>
		</React.Fragment>
	);

};

const HeaderContainer = styled.div`
	width: 1050px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Toggle = styled.button`
	width: 60px;
	height: 60px;
	background-color: #ffffff;
	border: none;
	font-size: 40px;
	font-weight: bold;
	/* text-align: center;
	vertical-align: center; */
`;

export default Header;