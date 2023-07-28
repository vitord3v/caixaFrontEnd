import styled from "styled-components";
import Bau from "../img/bau.png";
import Grade from "../img/grade.png";
import Grades from "../img/grades.png";
import Perfil from "../img/perfil.png";
import Trevo from "../img/trevo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Sidebar() {

  const router = useRouter();

  const showSidebar = router.pathname !== "/login" && router.pathname !== "/cadastro";

  const icons = [
    { id: 1, src: Trevo, description: 'Aposte' },
    { id: 2, src: Bau, description: 'Abrir Baús' },
    { id: 3, src: Grade, description: 'Minha Coleção' },
    { id: 4, src: Grades, description: 'Álbum Timemania' },
    { id: 5, src: Perfil, description: 'Minha Conta' }
  ];

  return (
    <>
      {showSidebar && (

        <SidebarContainer>
          {icons.map((icon) => (
            <IconItem key={icon.id}>
              <Image src={icon.src} alt={`Ícone ${icon.id}`} />
              <IconDescription>{icon.description}</IconDescription>
            </IconItem>
          ))}
        </SidebarContainer>

      )}
    </>



  )
}

const SidebarContainer = styled.div`
  position: fixed;
  height:100%;
  left: 0;
  top: 0;
  width: 98px;
  background-color: #1D1932;
  padding: 20px;
  padding-top: 120px;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const IconDescription = styled.p`
  font-size: 16px;
  color: #858585;
  margin-top: 8px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-family: 'Poppins';
  font-weight: 400;
  text-align: center;
`;
