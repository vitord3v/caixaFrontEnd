import { useState } from "react";
import styled from "styled-components"
import Logomarca from "../components/Logomarca";
import Link from "next/link";

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SingInContainer>

      <form>

        <Logomarca />

        <Input1 placeholder="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Senha" type="password" autoComplete="new-password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>

      </form>

      <Link href="/game_page">
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
  margin-top:250px;
`

const Cadastro = styled.h1`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    color: white;
    margin-left:60px;
`