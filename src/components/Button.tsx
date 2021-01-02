import * as React from "react"
import * as ReactNative from "react-native"
import styled from 'styled-components/native'
import { IStyledProps } from "./commons/StyledInterfaces"
import { componentStyleType } from "./commons/themeUtils"

const StyledButton = styled.TouchableOpacity<IStyledProps>`
	border-width:  ${props => props.theme.border.size};
	border-style: solid;
	border-radius: ${props => props.theme.border.radius};
	border-color: ${props => componentStyleType(props).borderColor || ''};
	background-color: ${props => props.outline ? "#FFFFFF" : (componentStyleType(props).backgroundColor || '')};
	font-size: 15px;
	padding: 3px 10px;
	margin: 10px;	

`
const StyledButtonText = styled.Text<IStyledProps>`
  font-family: '${props => props.theme.font.family}';
  font-weight: ${props => props.theme.font.weight};
  font-size: ${props => props.theme.font.size.default};
  color: ${props => props.outline ? (componentStyleType(props).backgroundColor || '') : (componentStyleType(props).fontColor || '')};	
  text-align: center; 
`;

interface ButtonInterface extends ReactNative.TouchableOpacityProps, IStyledProps {
	title: string;
}

export const Button: React.FC<ButtonInterface> = (props) =>
	<StyledButton {...props} >
		<StyledButtonText {...(props as IStyledProps)}>{props.title}</StyledButtonText>
	</StyledButton>