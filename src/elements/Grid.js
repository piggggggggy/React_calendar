import React from "react";
import styled from "styled-components";


const Grid = (props) => {

	const {children, is_flex, is_flex_column, width, height, padding, margin, bg, center, border} = props;
	const styles = {
		is_flex: is_flex,
		is_flex_column: is_flex_column,
		width: width,
		height: height,
		padding: padding,
		margin: margin,
		bg: bg,
		center: center,
		border: border,
	};

  return (
		<React.Fragment>
			<GridBox {...styles}>
				{children}
			</GridBox>
		</React.Fragment>
	);

};

Grid.defaultProps = {
	children: null,
	is_flex: false,
	is_flex_colunm: false,
	width: "100%",
	height: "100%",
	padding: false,
	margin: false,
	bg: false,
	center: false,
	border: "none",
};

const GridBox = styled.div`
	width: ${(props) => props.width};
  	height: ${(props) => props.height};
  	box-sizing: border-box;
  	${(props) => (props.padding? `padding: ${props.padding}`: '' )};
  	${(props) => (props.margin? `margin: ${props.margin}`: '' )};
  	${(props) => (props.bg? `background-color: ${props.bg}`: '' )};
  	${(props) => (props.is_flex? `display: flex; justify-content: space-around; align-items: center;` : '')};
	${(props) => (props.is_flex_column? `display: flex; flex-direction: column; justify-content: center; align-items: center;` : '')};
	${(props) => (props.center? `text-align: center`: ``)};
	border: ${(props) => props.border};
`;



export default Grid;