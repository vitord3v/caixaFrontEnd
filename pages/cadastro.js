import { useState } from "react";
import styled from "styled-components"
import Logomarca from "../components/Logomarca";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

export default function SignUpPage() {

    const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [dataNascimento, setDataNascimento] = useState("");

  function formatCPF(value) {
   
    const numericValue = value.replace(/\D/g, "");

    let formattedValue = numericValue.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
    );

    return formattedValue;
}

function handleCPFChange(e) {
    const value = e.target.value;
    const formattedValue = formatCPF(value);
    setCPF(formattedValue);
}

function handleChangeDataNascimento(e) {
    setDataNascimento(e.target.value);
  }

  function enviarInfos(e) {
    e.preventDefault();

    const dataNascimentoObj = new Date(dataNascimento);
    const dataAtual = new Date();
    const diferencaAnos = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();

    
    if (diferencaAnos >= 18) {
     
      const obj = {
        name: name,
        email: email,
        dataNascimento: dataNascimento,
        cpf: cpf,
        password: senha
      };

      const promise =  axios.post("http://localhost:5000/cadastro", obj);

      promise.then(resposta => {
        alert('Você foi cadastrado com sucesso!')
        router.push("/login");
      });

      promise.catch(erro => {
        console.log(erro.response.data);
        alert(erro.response.data.message || erro.response.data);
      });

    } else {

      alert("Você precisa ser maior de 18 anos para se cadastrar.");

    }
  }

  return (
    <SingUpContainer>
      <form onSubmit={enviarInfos}>

        <Logomarca />

        <Input2 placeholder="Nome" type="text" id="nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" value={cpf} onChange={handleCPFChange} placeholder="000.000.000-00" maxLength="14" required />
        <input type="date" id="dataNascimento" value={dataNascimento} onChange={handleChangeDataNascimento} required />
        <input placeholder="Senha" type="password" autoComplete="new-password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" id="confirmar" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} required />
        <button type="submit">Cadastrar</button>

      </form>

    
      <Link href="/login">
        <Login>Já tem uma conta? Entre agora!</Login>
      </Link>

    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
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

const Input2 = styled.input`
`
const Login = styled.h1`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    color: white;
    text-align:center;
`