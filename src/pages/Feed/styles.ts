import styled from 'styled-components/native';

export const LogoutButton = styled.TouchableOpacity`
    margin-top: 8px;
    height: 30px;
    width: 60px;
    border-radius: 8px;
    background-color: #685B7C;
    align-items: center;
    justify-content: center;
`

export const SearchButton = styled.TouchableOpacity`
    margin-top: 8px;
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
    margin-top: 6vh;
    margin-bottom: 6vh;
    width: 90vw;
    align-items: center;
    flex-direction: column;
    justify-content: center;
` 

export const Logo = styled.Image`
    height: 125px;
    width: 100px;
`

export const NavigationBar = styled.View`
    background-color: #3F3D56;
    position: fixed;
    bottom: 0;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    padding: 0 5vw;
    border: 1px solid #828282;
`

export const NavButtons = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 45vw;
    background-color: #3F3D56;
    opacity: 100%;
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
    position: fixed;
    top: 0;
    height: 5vh;
    width: 100vw;
    padding-right: 5vw;
    padding-left: 5vw;
    padding-bottom: 1vh;
    background-color: #3F3D56;
    z-index: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #828282;
`