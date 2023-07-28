import { useCallback } from 'react';
import Web3 from 'web3';
import SoccerCard from "../components/SoccerCard";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 2rem;
    margin-left: 300px;

    .walletButton {
        background-color: #F09000;
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
            <div>
                <button className='walletButton' onClick={connectWallet}>Conectar Carteira</button>
            </div>
            <h1> Sua Coleção </h1>
            <SoccerCard />
            <SoccerCard />
            <SoccerCard />
        </Container>
                
        </>
    )
}

export default YourCollection;