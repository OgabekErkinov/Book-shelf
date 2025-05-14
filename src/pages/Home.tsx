import { Box, Button, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const HoverAddIcon = styled(AddIcon)({
  transition: 'transform 0.3s ease',
});

const Home = () => {
    
  return (
    <Box height='100%' width='100%' padding='12px 24px'>
        <Stack height='100%' width='100%' rowGap='12px'>

            {/* header */}
            <Box height='auto' width='100%' padding='10px 20px'>
                <Stack height='100%' width='100%' gap='8px'>
                    <Box height='100%' width='100%' display='flex' justifyContent='space-between'>

                        {/* count of books................................. */}
                        <Box display='flex' alignItems='center' gap='10px'>
                            <Typography fontSize='36px' fontWeight='600' color="#fff">You've got </Typography>
                            <Typography fontSize='36px' fontWeight='600' color="#6200EE">7 books</Typography>
                        </Box>

                        {/* create book button............................. */}
                        <Button disableTouchRipple disableFocusRipple >
                            <Box display='flex' alignItems='center' justifyContent='center' gap='12px' 
                                 bgcolor='#6200EE' color='#fff' padding='8px 16px' borderRadius='2px'
                                 sx={{ '&:hover .rotate-icon': { transform: 'rotate(90deg)' } }}>
                                <HoverAddIcon className="rotate-icon" />
                                <Typography fontWeight='500' fontSize='20px'>Create</Typography>
                            </Box>
                            
                        </Button>
                    </Box>
                    <Typography fontSize='20px' fontWeight='400' color="#fff">Your books today</Typography>
                </Stack>
                

            </Box>

            {/* body : there all books will seen in here */}
            <Box height='auto' width='100%' display='grid' gridTemplateColumns='repeat(3, 1fr)' >

            </Box>

        </Stack>
         
    </Box>
  )
}

export default Home
