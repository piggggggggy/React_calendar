import React from "react";
import styled from "styled-components";




const Date = (props) => {



	return (
		<React.Fragment>
			<DateBox>
				<DateNumber/>
			</DateBox>
		</React.Fragment>
	)


};

Date.defaultProps = {

}

const DateBox = styled.div`
	width: 150px;
	height: 100px;
	margin: 0px;
	border: 1px solid black;


`;


const DateNumber = styled.p`

`;


export default Date;