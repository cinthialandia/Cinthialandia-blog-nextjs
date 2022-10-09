import React from "react";
import styled from "styled-components";
import { COLORS } from "./colors";
import { Caption, TEXT_MIXIN } from "./typography";
import { Paragraph, H4 } from "./typography";

const PageContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.DARK_COLOR};
  padding: 10px;
  background-color: red;
  border-bottom: 3px solid ${COLORS.WHITE};
`;

const ImgStyle = styled.image`
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export const BlogPageComponent: React.FC = () => (
  <PageContainer>
    <H4>What are props in react and how to use them with typescript?</H4>
    <Caption>23/10/1990</Caption>
    <Caption>7 minutes read </Caption>
    <ImgStyle>
      <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893619853" />
    </ImgStyle>
    <Paragraph>
      BUT FIRST, WHAT ARE PROPS? Is a pattern to share information between a
      parent component and a child component, where the parent component sets
      attributes and sends them to the child component as an object.
    </Paragraph>
  </PageContainer>
);
