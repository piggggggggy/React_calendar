import React from "react";
import styled from "styled-components";
import { Text, Grid } from ".";

const Input = (props) => {

	const {label, placeholder, _onChange, type} = props;

	return (
		<React.Fragment>
			<Grid is_flex_column>
				<Text bold size="30px" margin="0px">{label}</Text>
				<InputBox type={type} placeholder={placeholder} onChange={_onChange}/>
			</Grid>
		</React.Fragment>
	);
};

Input.defaultProps = {
	label: "일정내용",
	placeholder: "일정 내용을 입력하세요",
	_onChange: () => {},
	type: 'text',
	//value: '',
};

const InputBox = styled.input`
	font-size: 20px;
	width: 70%;
	height: 50px;
	padding: 8px;
	border: none;
	border-bottom: 2px solid #212121;
	box-sizing: border-box;
`;



export default Input;