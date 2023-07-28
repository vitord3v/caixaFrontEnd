import { useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"
import Logomarca from "../components/Logomarca";

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

      <Link to='/cadastro'>
        Primeira vez? Cadastre-se!
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
  background-color:#CCCCCC;

  button{
    width: calc(100% - 167px);
    background-color: #f87b09;
  }
`

const Input1 = styled.input`
  margin-top:250px;
`
