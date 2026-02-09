import { Container } from "@mui/material";
import { Header } from "../ui/header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default MainLayout;