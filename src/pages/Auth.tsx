import { Box, Button, Input, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const Auth = () => {
    const [signIn, setSignIn] = useState<boolean>(true)
    const signUpUser = async () => {
  try {
    const response = await axios.post('https://no23.lavina.tech/signup', {
      name: "Og'abek",
      email: "ogabek2025@example.com",
      key: "ogabekKey123",
      secret: "ogabekSecret456"
    });

    console.log("Signup success:", response.data);
  } catch (error) {
    console.error("Signup error:", error);
  }
};
useEffect(() => {
    signUpUser()
},[])
  return (
    <Box height='auto' width='430px'  borderRadius='12px'
         bgcolor='#FEFEFE' boxShadow='0 4px 32px 0 #3333330A'>
            <Stack height='100%' width='100%' padding='48px 28px' display='flex' gap='32px' >
                <Typography fontWeight='700' 
                            fontSize='36px' 
                            lineHeight='100%'
                            textAlign='center'
                            fontFamily='Mulish'>
                    { signIn ? 'Sign In' : 'Sign Up' }</Typography>

                <Stack height='auto' width='380px' gap='12px'>
                    <Stack>
                        <Typography>username</Typography>
                        <Input disableUnderline placeholder="Enter your username"
                               sx={{padding : '8px 12px'}}/>
                    </Stack>
                    <Stack>
                        <Typography>password</Typography>
                        <Input disableUnderline placeholder="Enter your password"
                               sx={{padding : '8px 12px'}}/>
                    </Stack>
                    <Stack display={signIn ? 'none' : 'flex'}>
                        <Typography>confirm password</Typography>
                        <Input disableUnderline placeholder="Enter your confirm password"
                                sx={{padding : '8px 12px'}}/>
                    </Stack>

                </Stack>

                <Stack gap='8px' mt='8px'>
                    <Button disableTouchRipple 
                    sx={{height : '40px', width : '380px', padding : '10px 24px', 
                         bgcolor : '#6200EE', color : '#fff'}}>
                        { signIn ? 'Enter' : 'Submit' }</Button>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                       <Typography fontSize='12px' textAlign='center'>Already signed up</Typography>
                       <Button disableTouchRipple onClick={() => setSignIn(prev => !prev)}>
                         <Typography fontSize='12px' textTransform='lowercase'>
                            Go to {signIn ? 'sign up' : 'sign in'}
                        </Typography>
                       </Button>
                    </Box>
                    
                </Stack>


            </Stack>

    </Box>
  )
}

export default Auth
