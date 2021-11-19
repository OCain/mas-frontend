import { ActivyTable } from "../../components/ActivyTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Container } from "./styles";
import { NewActivyModal } from "../../components/NewActivyModal";
import { NewCourseUnitModal } from "../../components/NewCourseUnitModal";
import { useState } from "react";

export function Dashboard() {
  const [isNewActivyModalOpen, setIsNewActivyModalOpen] = useState(false);
  const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false);

  function handleOpenActivyModal() {
    setIsNewActivyModalOpen(true);
  }

  function handleOpenCourseUnitModal() {
    setIsNewCourseUnitModalOpen(true);
  }

  function handleCloseActivyModal() {
    setIsNewActivyModalOpen(false);

  }

  function handleCloseCourseUnitModal() {
    setIsNewCourseUnitModalOpen(false);
  }

  return (
    <>
      <Header 
        onOpenNewActivyModal={handleOpenActivyModal}
        onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
      />
      <Container>
        <Summary />
        <ActivyTable />
      </Container>
      <NewActivyModal
        isOpen={isNewActivyModalOpen}
        onRequestClose={handleCloseActivyModal}
      />
      <NewCourseUnitModal
        isOpen={isNewCourseUnitModalOpen}
        onRequestClose={handleCloseCourseUnitModal}
      />
    </>
  );
}
