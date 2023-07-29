import styled from "styled-components";
import Logo from "../img/timemania.png";
import Rectangle1 from "../img/Rectangle1.png";
import Rectangle2 from "../img/Rectangle2.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import  LoginContext from "../Context/LoginContext";
import { contrastColor, contrastColor2 } from "../colors/colors";

export default function Cabeçalho() {

  const { isLogged, setToken, token,user,setUser } = useContext(LoginContext);

  const router = useRouter();

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");

    setUser({
      nome:localStorageUser
    });

    isLogged();
  }, []);

  function fazerLogin() {
    router.push("/login");
}
  const showHeader = router.pathname !== "/login" && router.pathname !== "/cadastro";

  return (
    <>
      {showHeader && (
        <PageContainerTopo>
          <Container>
            <Image src={Logo} width={400} height={68} alt="Logo" />
            <TracosLogo>
              <Image src={Rectangle1} width={200} height={6} alt="Rectangle1" />
              <Image src={Rectangle2} width={200} height={6} alt="Rectangle2" />
            </TracosLogo>
          </Container>
          { user && user.nome == undefined ? (
            <Button onClick={fazerLogin} className='Login'>Login</Button>
          ) : (
            <MessageUser>{user ?"Bem-vindo(a)" : "" }{user ? user.nome : ''} </MessageUser>
          )}
        </PageContainerTopo>
      )}
    </>
  );
}

const PageContainerTopo = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 120px;
    background-color: #131129;
    width:calc(100% - 98px);
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    right:0;
    margin: 0;
    z-index: 3;

    @media (max-width:800px) {
      width:calc(100%);
  }
`
const Button = styled.button`
    width: 140px;
    height: 42px;
    border-radius: 40px;
    border: 2px solid ${contrastColor2};
    display: flex;
    color: ${contrastColor2};
    align-items: center;
    justify-content: center;
    background-color: #131129;
    font-size: 16px;
    transition: all 200ms;
`

const MessageUser = styled.h1`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    color: ${contrastColor};
    margin-left:60px;
`
const TracosLogo = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 300px;
    @media (max-width:800px) {
      justify-content:flex-start;
  }
    img{
      @media (max-width:800px) {
      width: 80px !important;
      height: 5px !important;
  }
}

`
const Container = styled.div`
    height: auto;
    width:300px;
    img{
      @media (max-width:800px) {
          width: 200px;
          height: 40px;
      }
    }

    @media (max-width:800px) {
      width: 200px;
  }
`
