import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "./colors";
import { TEXT_MIXIN, Paragraph, H5 } from "./typography";

const ContainerNavBar = styled.div`
  border-radius: 0.5rem;
  max-width: 600px;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;

  .holis {
    text-decoration: none;
    color: ${COLORS.NEUTRAL_COLOR_DARK};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavBarComponent: React.FC = () => (
  <ContainerNavBar>
    <Link className="holis" to="Index">
      Home
    </Link>
    <Link className="holis" to="Index">
      About me
    </Link>
    <Link className="holis" to="Index">
      Blog
    </Link>
    <Link className="holis" to="Index">
      Portfolio
    </Link>
  </ContainerNavBar>
);
