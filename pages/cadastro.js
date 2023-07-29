import { useContext, useState } from "react";
import styled from "styled-components"
import Logomarca from "../components/Logomarca";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import ColorsContext from "../Context/ColorsContext";
import { contrastColor,darkColor,bingoColor } from "../colors/colors";

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#131129;

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
const Login = styled.h1`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    color: ${contrastColor};
    text-align:center;
`
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

      const promise =  axios.post(`${process.env.NEXT_PUBLIC_URL}/cadastro`, obj);

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

        <input placeholder="Nome" type="text" id="nome" value={name} onChange={(e) => setName(e.target.value)} required />
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

