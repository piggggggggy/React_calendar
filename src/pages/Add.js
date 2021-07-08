import React from "react";
import styled from "styled-components";
import { Input, Btn, Grid } from "../elements";


const Add = (props) => {

	return (
    <React.Fragment>
			<Grid is_flex_colunm >
				<Input type="text" text="일정 내용" placeholder="일정 내용을 입력하세요" />
				<Input type="date" text="일시" placeholder="YYYY-MM-DD" />
				<Grid is_flex>
					<Btn text="작성 취소" />
					<Btn text="작성 완료" />
				</Grid>
			</Grid>
    </React.Fragment>
  )

};



export default Add;