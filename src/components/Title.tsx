import styled from 'styled-components/native'

export const Title = styled.Text`
  color: #000;
  font-family: '${props => props.theme.font.family}';
  font-weight: ${props => props.theme.font.weight};
`