import styled from 'styled-components/native';

export const LogoutButton = styled.TouchableOpacity`
    margin-top: 40px;
    height: 30px;
    width: 60px;
    border-radius: 8px;
    background-color: #685B7C;
    align-items: center;
    justify-content: center;
`

export const SearchButton = styled.TouchableOpacity`
    margin-top: 40px;
    height: 30px;
    width: 60px;
    border-radius: 8px;
    background-color: #685B7C;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: #DEDEDE;
`

export const Container = styled.View`
    flex: 1;
    background-color: #3F3D56;
    flex-direction: column;
    align-items: center;
` 

export const Timeline = styled.View`
    margin-top: 10px;
    margin-bottom: 40px;
    width: 90%;
` 

export const Logo = styled.Image`
    height: 125px;
    width: 100px;
`

export const NavigationBar = styled.View`
    background-color: #3F3D56;
    position: absolute;
    bottom: 0;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    padding: 5px;
    border: 1px solid #828282;
`

export const NavButtons = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 38px;
    width: auto;
    background-color: #3F3D56;
`

export const NavIcons = styled.Image`
    height: 20px;
    width: 20px;
`

export const NavIconsSearch = styled.Image`
    height: 18px;
    width: 20px;
`

export const FeedHeader = styled.View`
    position: absolute;
    top: 0;
    height: 80px;
    width: 100%;
    padding-right: 5%;
    padding-left: 5%;
    padding-bottom: 1%;
    background-color: #3F3D56;
    z-index: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #828282;
`

export const AddButtonView = styled.View`
    position: absolute;
    bottom: 6%;
    right: 3%;
    height: 50px;
    width: 50px;
`

export const AddButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`

export const AddImage = styled.Image`
    height: 50px;
    width: 50px;
`

export const BInput = styled.TextInput`
  background-color: #DEDEDE;
  margin-top: 40px;
  width: 200px;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
`

export const TL = styled.View`
  align-items: center;
`

export const ProfileView = styled.View`
  margin-top: 90px;
  height: 170px;
  width: 100%;
  background-color: #685B7C;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const ProfilePhotoView = styled.View`
  height: 150px;
  width: 150px;
`

export const ProfilePhoto = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`

export const UserInfo = styled.View`
  height: 150px;
  width: auto;
  align-items: center;
  justify-content: space-evenly;
`

export const UserInfoText = styled.Text`
  color: white;
`