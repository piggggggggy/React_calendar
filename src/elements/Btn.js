import React from "react";
import styled from "styled-components";




const Btn = (props) => {


	const {is_circle, size, fontsize, text, _onClick, margin, bg, center} = props;
	
	const styles = {
		size: size,
		fontsize: fontsize,
		margin: margin,
		bg: bg,
		center: center,
	};

	if(is_circle) {
		return (
			<React.Fragment>
				<CircleBtn {...styles} onClick={_onClick}>{text}</CircleBtn>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<RectangleBtn {...styles} onClick={_onClick}>{text}</RectangleBtn>
		</React.Fragment>
	);
  

};

Btn.defaultProps = {
	is_circle: false,
	size: '50px',
	fontsize: '14px',
	margin: '5px',
	text: '',
	_onClick: () => {},
	bg: false,
	center: "center",
};

const RectangleBtn = styled.button`
	width: ${(props) => props.size};
	font-size: ${(props) => props.fontsize};
	margin: ${(props) => props.margin};
	${(props) => (props.bg? `background-color: ${props.bg}` : `background-color: yellow`)};
	${(props) => (props.center? `text-align: ${props.center}` : '')};
`;

const CircleBtn = styled.button`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	border-radius: ${(props) => props.size};
	font-size: ${(props) => props.fontsize};
	margin: ${(props) => props.margin};
	${(props) => (props.bg? `background-color: ${props.bg}` : `background-color: yellow`)};
	${(props) => (props.center? `text-align: ${props.center}` : '')};
`;



export default Btn;
