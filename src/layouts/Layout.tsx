import { Box } from "@mui/material";
import bgImage from '../assets/bgImage.png';
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box height="100vh" maxWidth="1440px">
      <Box
        height="100%"
        width="100%"
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '80% 100%',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
