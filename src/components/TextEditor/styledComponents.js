import styled from 'styled-components'

export const BackGroundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`

export const MainContainer = styled.div`
    display: flex;
    background-color: #25262c;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center; 
`
export const AppContainer = styled.div`
    display: flex;
    background-color: #1b1c22;
    height: 70vh;
    padding: 20px;
    width: 86%;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 50%;
`
export const LeftHeading = styled.h1`
  font-weight: 600;
  margin-top: 0px;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 26px;
`
export const LeftImage = styled.img`
  height: 50%;
`
export const RightContainer = styled.div`
  border: 1px solid #334155;
  border-radius: 8px;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 50%;
  font-family: 'Roboto';
`
export const EditorUl = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 0px;
  list-style-type: none;
  border-bottom: 1px solid #334155;
  width: 100%;
  padding-bottom: 3px;
  margin-bottom: 0px;
`
export const EditorLi = styled.li`
  font-size: 18px;
`

export const Button = styled.button`
  color:${props => (props.color ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  margin-left: 4px;
  cursor: pointer;
  margin:10px;
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderLine ? 'underline' : 'normal')};
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 15px;
  color: #f8fafc;
  font-size: 25px;
 
`
