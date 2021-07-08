import styled from "styled-components/native";

export const deleteIcon = styled.TouchableOpacity<{appears: boolean}>`
  display: ${props => props.appears? 'initial' : 'none'};
`

export const Card = styled.View<{displayed: boolean}>`
  display: ${props => props.displayed? 'initial' : 'none'};
`