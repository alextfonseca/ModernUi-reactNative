import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 56px;

  background: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.text};

  padding: 0 16px;
`;
