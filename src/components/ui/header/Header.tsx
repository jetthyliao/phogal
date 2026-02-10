import { Box, Container } from '@mui/material';

export const Header = () => {
  return (
    <Box className="shadow-lg">
      <Container className="flex p-4 justify-between">
        <p> Phogal</p>
        <p> Jan</p>
      </Container>
    </Box>
  );
};