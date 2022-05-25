import React from "react";

import { Container, Header, Content } from "./styles";

import bannerImg from "../../assets/banner.png";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <Container>
      <Header source={bannerImg}>
        <Input placeholder="Pesquisar" />
      </Header>

      <Content>
        <Card />
      </Content>
    </Container>
  );
}
