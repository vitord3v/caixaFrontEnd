import { useContext, useState } from "react";
import styled from "styled-components"
import Logomarca from "../components/Logomarca";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import  LoginContext  from "../Context/LoginContext";

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

    const promise = axios.post("http://localhost:5000/login", obj);

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

        <Input1 placeholder="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#131129;

  button{
    width: calc(100% - 1500px);
    background-color: #F09000;
  }
`

const Input1 = styled.input`
`

const Cadastro = styled.h1`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    color: white;
`