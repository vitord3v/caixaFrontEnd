import styled from "styled-components";
import Logo from "../img/timemania.png";
import Rectangle1 from "../img/Rectangle1.png";
import Rectangle2 from "../img/Rectangle2.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Cabeçalho() {

  const { isLogged, setToken, token } = useContext(LoginContext);

  const router = useRouter();

  const [user, setUser] = useState('');

  console.log(token);

  useEffect(() => {
    isLogged();
  }, []);

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const userFromLocalStorage = localStorage.getItem('user');
      setUser(userFromLocalStorage);
    }
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
          {!token ? (
            <Button onClick={fazerLogin} className='Login'>Login</Button>
          ) : (
            <MessageUser>Bem-vindo(a) {user} </MessageUser>
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
    width:100%;
    box-shadow: 0px 4px 4px 0px #00000026;
    top: 0;
    left:0;
`
const Button = styled.button`
    width: 140px;
    height: 42px;
    border-radius: 40px;
    border: 2px solid lightgray;
    display: flex;
    color: lightgray;
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
    color: white;
    margin-left:60px;
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
