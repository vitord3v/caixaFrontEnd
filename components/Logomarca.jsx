import styled from "styled-components";
import NextImage from "next/image"; // Renomeie o componente
import Logo from "../public/logo.png";
import Rectangle1 from "../img/Rectangle1.png";
import Rectangle2 from "../img/Rectangle2.png";

export default function Logomarca() {
  return (
    <PageContainerTopo>
      <Container>
        <NextImage src={Logo} width={400} height={68} alt="Logo" />
        <TracosLogo>
          <NextImage src={Rectangle1} width={200} height={6} alt="Rectangle1" />
          <NextImage src={Rectangle2} width={200} height={6} alt="Rectangle2" />
        </TracosLogo>
      </Container>
    </PageContainerTopo>
  );
}


const PageContainerTopo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 220px;
    background-color: #131129;
    width:100%;
    top: 0;
    left:0;
`
const TracosLogo = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 300px;
`
const Container = styled.div`
    height: auto;
    width:300px;
`
