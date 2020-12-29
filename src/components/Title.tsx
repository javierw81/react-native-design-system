import styled from 'styled-components/native'

export const Title = styled.Text`
  color: #000;
  font-family: '${props => props.theme.font.family}';
  font-weight: ${props => props.theme.font.weight};
  font-size:  ${props => props.theme.font.size.title};
  text-align: left; 
`

export const Subtitle = styled.Text`
  font-family: '${props => props.theme.font.family}';
  font-weight: ${props => props.theme.font.weight};
  font-size: ${props => props.theme.font.size.subtitle};
  text-align: left; 
`;