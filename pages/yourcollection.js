import { useCallback } from 'react';
import Web3 from 'web3';
import SoccerCard from "../components/SoccerCard";
import styled from "styled-components";
import { bingoColor } from '../colors/colors';

const Container = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    margin-top: 100px;

    .head{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    h1{
        color: white;
        font-family: 'Poppins';
        white-space: nowrap;
    }

    .walletButton {
        background-color: #F09000;
    }

    .cards{
        display: flex;
        gap: 10px;
    }

    button{
        transition: all 200ms;
        border: 1px solid transparent;
        &:hover{
            color: ${bingoColor};
            background-color: white;
            border: 1px solid ${bingoColor};
        }
    }
`
function YourCollection () {
    const connectWallet = useCallback(async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();

            const polygonNetwork = {
                chainId: '0x89',
                chainName: 'Matic Network',
                nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
                },
                rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
                blockExplorerUrls: ['https://explorer.matic.network/']
            };

            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [polygonNetwork]
            });
        } else {
            alert('MetaMask não encontrada. Você precisa instalar o MetaMask para usar este aplicativo.');
        }
    }, []);

    return ( 
        <>
        
        <Container>
            <div className='head'>
            <h1> Sua Coleção </h1>
                <button className='walletButton' onClick={connectWallet}>Conectar Carteira</button>
            </div>
           
            <div className='cards'>
            <SoccerCard turned={false} name='Silêncio no maraca' source='/soccer-player.svg' alt_text=''/>
            <SoccerCard turned={false} name='Dinamitando' source='/dinamite.png' alt_text=''/>
            <SoccerCard turned={false} name='Silêncio no maraca' source='/soccer-player.svg' alt_text=''/>
            </div>
        </Container>
                
        </>
    )
}

export default YourCollection;