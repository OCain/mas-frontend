import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/Auth'
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewActivyModal: () => void;
  onOpenNewCourseUnitModal: () => void;
}

export function Header({onOpenNewActivyModal, onOpenNewCourseUnitModal}: HeaderProps) {
  function handleSignOut() {
    signOut();
  }
  
  const {signOut} = useAuth();

  return (
    <Container>
      <Content>
        <h1>My Activies Space</h1>
        <div>
          <button 
            type="button"
            onClick={onOpenNewCourseUnitModal}
          >
            Nova Unidade Curricular
          </button>
          <button
            type="button"
            onClick={onOpenNewActivyModal}
          >
            Nova Atividade
          </button>
          <button
            type="button"
            onClick={handleSignOut}
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </Content>
    </Container>
    )
}