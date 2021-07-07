import React from "react";
import styled from "styled-components";


const Text = (props) => {

	const {children, bold, color, size, margin, padding} = props;
	const styles = {
		bold: bold,
		color: color,
		size: size,
		margin: margin,
		padding: padding,
	};

	return (
		<React.Fragment>
			<TextP {...styles}>
				{children}
			</TextP>
		</React.Fragment>
	); 

};

Text.defaultProps = {
	children: null,
	bold: false,
	color: '#222831',
	size: '14px',
	margin: false,
	padding: false,
};


const TextP = styled.p`
	color:${(props) => props.color};
	font-size: ${(props) => props.size};
	font-weight: ${(props) => (props.bold? '600': '400')};
	${(props) => (props.margin? `margin: ${props.margin}`:'')};
	${(props) => (props.padding? `padding: ${props.padding}`:'')};
`;




export default Text;