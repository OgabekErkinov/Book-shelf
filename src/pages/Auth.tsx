import { Box, Button, Input, Stack, Typography } from "@mui/material"
import { useState } from "react"

const Auth = () => {
    const [signIn, setSignIn] = useState<boolean>(true)
  return (
    <Box height='520px' width='430px'  borderRadius='12px'
         bgcolor='#FEFEFE' boxShadow='0 4px 32px 0 #3333330A'>
            <Stack height='100%' width='100%' padding='48px 28px' display='flex' gap='32px' >
                <Typography fontWeight='700' 
                            fontSize='36px' 
                            lineHeight='100%'
                            textAlign='center'
                            fontFamily='Mulish'>
                    Sign Up</Typography>

                <Stack height='240px' width='380px' gap='16px'>
                    <Stack gap='4px'>
                        <Typography>username</Typography>
                        <Input disableUnderline placeholder="Enter your username"
                               sx={{padding : '12px 14px'}}/>
                    </Stack>
                    <Stack gap='4px'>
                        <Typography>password</Typography>
                        <Input disableUnderline placeholder="Enter your password"
                               sx={{padding : '12px 14px'}}/>
                    </Stack>
                    <Stack gap='4px'>
                        <Typography>confirm password</Typography>
                        <Input disableUnderline placeholder="Enter your confirm password"
                                sx={{padding : '12px 14px'}}/>
                    </Stack>

                </Stack>

                <Stack gap='8px' mt='8px'>
                    <Button disableTouchRipple 
                    sx={{height : '40px', width : '380px', padding : '10px 24px', 
                         bgcolor : '#6200EE', color : '#fff'}}>
                        Submit</Button>
                    <Typography fontSize='12px' textAlign='center'>Already signed up Go to sign in</Typography>
                </Stack>


            </Stack>

    </Box>
  )
}

export default Auth
