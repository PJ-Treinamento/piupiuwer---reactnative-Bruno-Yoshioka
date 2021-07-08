import styled from 'styled-components/native';

export const container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: #3F3D56;
`

export const EntryPage = styled.View`
    height: 600px;
    width: 320px;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image`
    height: 125px;
    width: 100px;
`

export const EntryButtons = styled.TouchableOpacity`
    margin-bottom: 8px;
    height: 60px;
    width: 288px;
    border-radius: 8px;
    background-color: #FF477E;
    align-items: center;
    justify-content: center;
`

export const EntryButtonsText = styled.Text`
    color: #DEDEDE;
`