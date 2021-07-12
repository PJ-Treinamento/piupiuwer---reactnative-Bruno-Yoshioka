import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #3F3D56;
  flex-direction: column;
  align-items: center;
`

export const PostHeader = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #828282;
`
export const ExitButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`

export const ExitIcon = styled.Image`
  height: 40px;
  width: 40px;
`

export const PiuButton = styled.TouchableOpacity`
  height: 40px;
  width: 60px;
  background-color: #FF477E;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const PiuButtonText = styled.Text`
  color: white;
`

export const ViewBody = styled.View`
  height:100%;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10px;
  padding-right: 40px;
  padding-left: 40px;
`

export const ViewPhoto = styled.View`
  height: 60px;
  width: 60px;
  align-items: flex-start;
`

export const UserPhoto = styled.Image`
  height: 50px;
  width: 50px;
  margin-top: 20px;
  border-radius: 25px;
`

export const TextWrapper = styled.View`
  flex-direction: row;
  padding-left: 10px;
`

export const TxtArea = styled.TextInput<{overLimit: boolean}>`
  flex: 1;
  ${({overLimit}) => css`
      color: ${overLimit?'red' : '#FFFFFF'};
  `}
  border: none;
`

export const Contagem = styled.Text<{overLimit: boolean}>`
  margin-left: 10px;
  width: 60px;
  height: 91%;
  color: ${props => props.overLimit? 'red' : '#FFFFFF'};
`

export const PullTopWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`