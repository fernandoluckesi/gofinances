import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  border-radius: 5px;

  margin-right: 16px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  width: ${RFValue(300)}px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
  ${(props) =>
    props.type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${(props) =>
    props.type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

  ${(props) =>
    props.type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const LastTransaction = styled.Text`
  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
