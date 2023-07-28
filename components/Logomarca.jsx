import styled from "styled-components";
import NextImage from "next/image"; // Renomeie o componente

import Logo from "../public/logo.png";

export default function Logomarca() {
  return (
    <PageContainerTopo>
      {/* Use o componente NextImage do next/image */}
      <LogoImage src={Logo} alt="Logo" />
    </PageContainerTopo>
  );
}

// Renomeie o componente para evitar conflitos de nomes
const LogoImage = styled(NextImage)`
  font-family: 'Roboto', cursive;
  font-weight: 800;
  font-size: 70px;
  color: white;
  display: flex;
  justify-content: center;

  span {
    color: #f87b09;
  }
`;

const PageContainerTopo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #212121;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000026;
  position: fixed;
  top: 0;
  left: 0;
`;
