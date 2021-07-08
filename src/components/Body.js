import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Date from "./Date";
import Days from "./Days";
import { Grid, Btn, Text } from "../elements";
import moment from "moment";


const Body = (props) => {

	const current = useSelector(state => state.date.current);

	const first = current.clone().startOf("month");
	const last = current.clone().endOf("month");
	const firstDay = first.clone().day();
	// const lastDay = last.clone().day();
	// const lastMonth = current.clone().subtract(1,"m");
	// const preLast = lastMonth.clone().endOf("month");

	const now = useSelector(state => state.date.check);

	const DateRender = () => {
		
		return(
			<>
				{[...Array(42)].map((x, idx) => {
					
					let startDate = first.clone().add(idx, "d").subtract(firstDay, 'd');
					let lastDate = last.format('D');
					let today = now.format("YYYYMMDD") === startDate.format("YYYYMMDD");
					console.log(today);



					if(idx < firstDay || idx > firstDay+Number(lastDate)-1){
						return (
							<Date 
							today={today}
							key={idx} 
							color='lightgray'
							color2={idx%7 === 0? 'red': ''}
							color3={idx%7 === 6? 'blue': ''}
							text={startDate.format('D')}
							/>
						)
					}else{
						return (
							<Date 
							today={today}
							key={idx} 
							color2={idx%7 === 0? 'red': ''}
							color3={idx%7 === 6? 'blue': ''}
							text={startDate.format('D')}
							/>
						)
					}
				})}
			</>
		);

	}
	
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


	return (
		<React.Fragment>
			<BodyContainer>
				<Grid is_flex padding="0px">
					{days.map((d, idx) => (
						<Days key={idx} text={d}></Days>
					))}
				</Grid>
				{DateRender()}
			</BodyContainer>
		</React.Fragment>
	)

};

const BodyContainer = styled.div`
	width: 1050px;
	max-height: 650px;
	padding: 0px;
	display: flex;
	flex-wrap: wrap;
	border: 1px solid black;

`;



export default Body;