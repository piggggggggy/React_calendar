import React from "react";
import styled from "styled-components";


const Grid = (props) => {

	const {children, is_flex, is_flex_colunm, width, padding, margin, bg, center} = props;
	const styles = {
		is_flex: is_flex,
		is_flex_colunm: is_flex_colunm,
		width: width,
		padding: padding,
		margin: margin,
		bg: bg,
		cneter: center,
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
	padding: false,
	margin: false,
	bg: false,
	center: false,
};

const GridBox = styled.div`
	width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding? `padding: ${props.padding}`: '' )};
  ${(props) => (props.margin? `margin: ${props.margin}`: '' )};
  ${(props) => (props.bg? `background-color: ${props.bg}`: '' )};
  ${(props) => (props.is_flex? `display: flex; justify-content: space-between; align-items: center;` : '')};
	${(props) => (props.is_flex? `display: flex; flex-direction: colunm; justify-content: space-between; align-items: center;` : '')};
	${(props) => (props.center? `text-align: center`: ``)};
`;



export default Grid;