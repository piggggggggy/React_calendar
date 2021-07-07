import React from "react";
import styled from "styled-components";
import { Text, Grid } from ".";

const Input = (props) => {

	const {label, placeholder, _onChange, type} = props;

	return (
		<React.Fragment>
			<Grid is_flex_colunm>
				<Text margin="0px">{label}</Text>
				<Input type={type} placeholder={placeholder} onChange={_onChange}/>
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
	width: 100%;
	border: none;
	border-bottom: 2px solid #212121;
	box-sizing: border-box;
`;



export default Input;