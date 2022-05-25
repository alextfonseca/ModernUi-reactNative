import React from "react";

import { Container, Image, Subtitle, Title } from "./styles";

import ImagePNG from "../../assets/img1.png";

export function Card() {
  return (
    <Container>
      <Image
        source={ImagePNG}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />

      <Title>Card com imagem</Title>
      <Subtitle>Card com imagem</Subtitle>
    </Container>
  );
}
