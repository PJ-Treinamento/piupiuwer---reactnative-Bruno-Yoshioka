import styled from "styled-components/native";

export const deleteIcon = styled.TouchableOpacity<{appears: boolean}>`
  display: ${props => props.appears? 'flex' : 'none'};
  width: 50px;
  height: 20px;
  background-color: #685B7C;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 4px;
`

export const deleteButtonText = styled.Text`
  color: #DEDEDE;
`

export const Card = styled.View<{displayed: boolean}>`
  display: ${props => props.displayed? 'flex' : 'none'};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  border: 2px solid #DEDEDE;
  border-radius: 8px;
  margin-bottom: 4px;
  padding: 8px;
`

export const PhotoView = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 10%;
`

export const UserPhoto = styled.Image`
  border-radius: 20px;
  height: 40px;
  width: 40px;
`

export const ContentView = styled.View`
  width: 75%;
  padding-left: 8px;
`

export const ViewContentHeader = styled.View`
  width: 75%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const HeaderText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const UserFirstName = styled.Text`
  margin-right: 8px;
  color: white;
`

export const UserUsername = styled.Text`
  color: white;
`

export const PiuText = styled.Text`
  color: #FFFFFF;
`

export const InteractiveButtons = styled.TouchableOpacity`
  width: 30%;
  height: 20;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

export const Interactions = styled.View`
  width: 70%;
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
`

export const ButtonImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`