import { useContext, useState } from "react";
import styled from "styled-components"
import Logomarca from "../components/Logomarca";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import  LoginContext  from "../Context/LoginContext";
import { bingoColor, contrastColor, darkColor } from "../colors/colors";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {setUser} = useContext(LoginContext);

  function enviarInfos(e) {
    e.preventDefault();

    const obj = {
      email: email,
      password: senha
    }

    const promise = axios.post(`${process.env.VITE_API_URL}/login`, obj);

    promise.then(resposta => {

      localStorage.setItem("token", resposta.data.token);
      localStorage.setItem("user", resposta.data.nome);
      localStorage.setItem("userid", resposta.data._id);
      setUser(resposta.data);
      router.push("/");
    });

    promise.catch(erro => {

      alert('Usuário e/ou senha inválidos!');
      console.log(erro.response.data);
    });

  }

  return (
    <SingInContainer>

      <form onSubmit={enviarInfos}>

        <Logomarca />

        <input placeholder="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Senha" type="password" autoComplete="new-password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>

      </form>

      <Link href="/cadastro">
        <Cadastro>Primeira vez? Cadastre-se!</Cadastro>
      </Link>

    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  overflow: hidden;

  input{
    background-color: ${contrastColor};
    color: ${darkColor};
    width: calc(100%);
    max-width: 500px;
    min-width: 200px;
    box-sizing: border-box;
  }


  button{
    width: calc(100%);
    max-width: 500px;
    min-width: 200px;
    border: 1px solid rgba(0,0,0,0);
    background-color: ${bingoColor};
    transition: all 200ms;
    
    &:hover{
      border: 1px solid ${bingoColor};
      background-color: ${contrastColor};
      color: ${bingoColor};
    }
  }

  a{
    transition: all 200ms;
    &:hover{
      h1{
        transition: all 200ms;
        color: ${bingoColor};
      }
    }
  }
`

const Cadastro = styled.h1`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    color: ${contrastColor};
`