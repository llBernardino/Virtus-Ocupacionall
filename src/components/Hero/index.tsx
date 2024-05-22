import {
    BackgroundHero, TextHero,
    Title, Image
  } from './style'
  import {theme} from '../../themes/themes'
import { Box, Button, Container, ThemeProvider} from '@mui/material';
import heroimg from '../../imgs/heroimg.png';

  export const Hero = () => {

    return (
      <ThemeProvider theme={theme}>
        <BackgroundHero>
          <Container maxWidth='lg'>
            <Box display="flex" flexWrap= 'wrap' gap={2} justifyContent='center' >
              <Box my={4} display='flex' alignItems='start' p={2} flexDirection = 'column'  justifyContent='center' maxWidth={652}>
                <Title>Pré Admissão digital e Gestão Ocupacional em um único lugar!</Title>
                <TextHero>Com a nossa tecnologia, desenvolvemos soluções eficazes para a rotina diária do cliente. Nosso propósito é atendimento humanizado!</TextHero>
                <Button variant='contained'>Agendar uma demonstração gratuita</Button> 
              </Box>
              <Box color={'primary'} my={4} display='flex' alignItems='center' p={2} justifyContent='center' >
                <Image alt="Mountains" src={heroimg}  />
              </Box>
            </Box>
          </Container>
        </BackgroundHero>
      </ThemeProvider >
      
    );
  }



