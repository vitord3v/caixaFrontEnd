import { useCallback, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import SoccerCard from "../components/SoccerCard";
import styled from "styled-components";
import { Alchemy, Network } from "alchemy-sdk";
import ColorsContext from '../Context/ColorsContext';
import { backgroundColor,textColor,bingoColor,finishColorDisabled,bingoColorDisabled,contrastColor,darkColor,sidebarColor,contrastColor2 } from "../colors/colors";
import axios from 'axios';


function YourCollection() {
    

    const [userAddress, setUserAddress] = useState(null);
    const [nftsEspecificacoes, setNftsEspecificacoes] = useState([]);
    const [myCards, setMyCards] = useState([]);

    const getNftByAdress = async () => {

        const nftManiaContract = "0x1882b841564a11675729abff14c2b6ecbb5dfb14"

        const config = {
            apiKey: process.env.NEXT_PUBLIC_API,
            network: Network.MATIC_MAINNET,
        };
        const alchemy = new Alchemy(config)

        if (userAddress) {
            const nfts = await alchemy.nft.getNftsForOwner(userAddress)
            console.log(nfts)
            const nftList = nfts["ownedNfts"]

            const ownedNfts = nftList.filter((nft) => nft.contract.address === nftManiaContract)
            setNftsEspecificacoes(ownedNfts);
            console.log(ownedNfts)
        }
    }

    useEffect(() => { 
        getNftByAdress();

        if(localStorage.getItem("token"))
        {
            axios.get(`${process.env.NEXT_PUBLIC_URL}/getItensBau/${localStorage.getItem('token')}`)
            .then((res) =>{
                console.log(res.data);
                setMyCards(res.data);
            })
            .catch(err => {

            });
        }
    
    }, [userAddress])

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
            <Container1>
                <div className='head'>
                    <h1> Minha Coleção </h1>
                </div>

                <div className='cards'>
                    {myCards.map((card,index) => (

                        <SoccerCard key={card.id} card_id={card.id} show={true} quantidade={1} turned={false} name={card.name} source={card.source} alt_text={card.alt} />

                    ))}

                </div>
            </Container1>

                <Container>
                    <div className='head'>
                        <h1> Coleção na sua Carteira </h1>
                        {userAddress ? <h2>{userAddress}</h2> : <button className='walletButton' onClick={connectWallet}>Conectar Carteira</button>}
                    </div>
    
                <div className='cards'>
                    {nftsEspecificacoes.map((nfts) => (

                        <SoccerCard key={nfts.tokenId} show={false} quantidade={nfts.balance} turned={false} name={nfts.title} source={nfts.media[0].gateway} alt_text={nfts.rawMetadata.description} />

                    ))}

                </div>
            </Container>

        </Wrap>
    )
}

export default YourCollection;

const Wrap = styled.div`
        @media (max-width:700px) {
            margin-right: 100px;
        }
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
        align-items: center;
        justify-content: space-around;
        width:894px;

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