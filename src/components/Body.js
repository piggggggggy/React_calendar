import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Date from "./Date";
import Days from "./Days";
import { Grid, Btn, Text } from "../elements";
import moment from "moment";


const Body = (props) => {

	const now = moment();
	const first = now.clone().startOf("month");
	const last = now.clone().endOf("month");
	const firstDay = first.clone().day();
	const lastDay = last.clone().day();
	const lastMonth = now.clone().subtract(1,"m");
	const preLast = lastMonth.clone().endOf("month");


	const DateRender = () => {
		
		return(
			<>
				{[...Array(42)].map((x, idx) => {
					
					let startDate = preLast.clone().add(idx, 'd').subtract(firstDay, 'd');
					let startOne = first.clone().add(idx, 'd').subtract(firstDay, 'd');
					
					if(idx < firstDay || idx > 40-lastDay){
						return (
							<Date 
							key={idx} 
							color
							text={idx < firstDay? startDate.format("D"): startOne.format("D")}
							/>
						)
					}else{
						return (
							<Date 
							key={idx} 
							text={idx < firstDay? startDate.format("D"): startOne.format("D")}
							/>
						)
					}
					


					// if(idx < firstDay){
					// 	return (
					// 		<Date key={idx} color text={startDate.format("D")}/>
					// 	)
					// }else if(idx > 40-lastDay){
					// 	return (
					// 		<Date key={idx} color text={startOne.format("D")}/>
					// 	)
					// }else{
					// 	return (
					// 		<Date key={idx} text={startOne.format("D")}/>
					// 	)
					// }
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
					))};
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

`;



export default Body;