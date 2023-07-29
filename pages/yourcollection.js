import { useCallback, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import SoccerCard from "../components/SoccerCard";
import styled from "styled-components";
import { Alchemy, Network } from "alchemy-sdk";
import ColorsContext from '../Context/ColorsContext';
import { backgroundColor,textColor,bingoColor,finishColorDisabled,bingoColorDisabled,contrastColor,darkColor,sidebarColor,contrastColor2 } from "../colors/colors";


function YourCollection() {
    

    const [userAddress, setUserAddress] = useState(null);
    const [nftsEspecificacoes, setNftsEspecificacoes] = useState([]);

    const getNftByAdress = async () => {

        const nftManiaContract = "0x1882b841564a11675729abff14c2b6ecbb5dfb14"

        const config = {
            apiKey: '-uTYzNDjfm7ac3cAPERTDB4ZE995HPqH',
            network: Network.MATIC_MAINNET,
        };
        const alchemy = new Alchemy(config)

        if (userAddress) {
            const nfts = await alchemy.nft.getNftsForOwner(userAddress)
            const nftList = nfts["ownedNfts"]

            const ownedNfts = nftList.filter((nft) => nft.contract.address === nftManiaContract)
            setNftsEspecificacoes(ownedNfts);
            console.log(ownedNfts)
        }
    }

    useEffect(() => { getNftByAdress() }, [userAddress])

    const connectWallet = useCallback(async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();

            const accounts = await window.web3.eth.getAccounts();
            if (accounts.length > 0) {
                setUserAddress(accounts[0])
                console.log("Endereço da carteira conectada:", accounts[0]);
            }

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
        <Wrap>
                <Container>
                    <div className='head'>
                        <h1> Coleção na sua Carteira </h1>
                        {userAddress ? <>
                        <button className='walletButton' disabled='true' > Carteira Conectada </button> 
                        <h2> Carteira conectada com endereço: <br/> {userAddress}</h2> 
                        </>
                        : 
                        <button className='walletButton' onClick={connectWallet}>Conectar Carteira</button>}
                    </div>
    
                <div className='cards'>
                    {nftsEspecificacoes.map((nfts) => (

                        <SoccerCard key={nfts.tokenId} show={false} quantidade={nfts.balance} turned={false} name={nfts.title} source={nfts.media[0].gateway} alt_text={nfts.rawMetadata.description} />

                    ))}

                </div>
            </Container>

            <Container1>
                <div className='head'>
                </div>

                <div className='cards'>
                    {nftsEspecificacoes.map((nfts) => (

                        <SoccerCard key={nfts.tokenId} show={true} quantidade={nfts.balance} turned={false} name={nfts.title} source={nfts.media[0].gateway} alt_text={nfts.rawMetadata.description} />

                    ))}

                </div>
            </Container1>

        </Wrap>
    )
}

export default YourCollection;

const Wrap = styled.div`
    @media (max-width:700px) {
        margin-right: 100px;
    }

    margin-bottom: 10rem;
    `

    const Container = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    margin-top:75px;
    margin-bottom:75px;

    .container {
        display: flex;

    }

    .head{
        display: flex;
        flex-direction: column;
        gap:2rem;
        align-items: center;
        justify-content: space-around;
        width:894px;

        text-align: center;

        h2 {
            margin-bottom: 1rem;
        }

        .wallet{
            color: ${contrastColor};
            font-family: 'Poppins';
        }

        @media (max-width: 1050px) {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    }

    h1{
        color: ${contrastColor};
        font-family: 'Poppins';
        white-space: nowrap;
    }
    h2{
        color: ${contrastColor};
        font-family: 'Poppins';
        
    }

    .walletButton {
        background-color: #F09000;
        width:250px;
    }

    .cards{
        display: flex;
        flex-wrap:wrap;
        gap: 10px;
        width:894px;
        height:auto;

        @media (max-width:800px) {
            display: flex;
            flex-direction: column;
        }

    }

    button{
        transition: all 200ms;
        border: 1px solid transparent;
        &:hover{
            color: ${bingoColor};
            background-color: ${contrastColor};
            border: 1px solid ${bingoColor};
        }
    }
`
const Container1 = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    margin-top:180px;

    @media (max-width: 1050px) {
        flex-direction: column;
        gap: 50px;
    }

    .head{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width:894px;
        justify-content: center;

        .wallet{
            color: ${contrastColor};
            font-family: 'Poppins';
        }
    }

    h1{
        color: ${contrastColor};
        font-family: 'Poppins';
        white-space: nowrap;
    }

    

    .walletButton {
        background-color: #F09000;
        width:250px;
    }

    .cards{
        display: flex;
        flex-wrap:wrap;
        gap: 10px;
        width:894px;
        height:auto;

        @media (max-width:800px) {
            flex-direction: column;
        }

    }

    button{
        transition: all 200ms;
        border: 1px solid transparent;
        &:hover{
            color: ${bingoColor};
            background-color: ${contrastColor};
            border: 1px solid ${bingoColor};
        }
    }
`