import React from 'react';
import styled from 'styled-components';

//버튼 컴포넌트 생성
const Button =(props) =>{
    return(
        <Container
            backgroundColor={props.backgroundColor}
            outlined = {props.outlined}
            borderColor ={props.borderColor}
            fontColor = {props.fontColor}
            width ={props.width}
            flexDirection={props.flexDirection}
        justifyContent={props.justifyContent}

        >

                {props.text}

        </Container>
    )
}

//proops default 값 설정
Button.defaultProps ={
    text : 'default ',
    borderColor : 'black',
    outlined : false,
    backgroundColor : 'rgb(187,208,222)' ,
    fontColor :'white',
    width : '8rem',
    flexDirection :'row',
    justifyContent:'center',

}

/*styled-component css 설정*/

const Container = styled.div`
  height: 50px;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.fontColor};
  outline: ${(props) => props ? `white 1px solid` : false};
  background: ${(props) => props.backgroundColor};
  border: ${(props) => props['borderColor'].length > 0 ? props.borderColor : 'none'};
  word-break: break-all;
  box-shadow: 2px 2px 2px #c3c3c366;
  user-select: none;
  border-radius: 75px 75px 75px 75px / 67px 67px 67px 67px;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);


  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background-color: #be9ee0;
    box-shadow: inset 1px 1px 3px 0px #9d98983d;
    filter: brightness(100%);
  }

  const Text = styled . span`;
 


 export default Button;