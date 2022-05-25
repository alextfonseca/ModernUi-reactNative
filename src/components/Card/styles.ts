import styled from "styled-components/native";

import { RFPercentage } from "react-native-responsive-fontsize";

import * as Animatable from "react-native-animatable";

export const Container = styled.View`
  align-items: center;

  width: 180px;
  height: 250px;
  background: ${({ theme }) => theme.colors.primary_800};

  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -50px;

  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFPercentage(2)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFPercentage(1.5)}px;
`;
