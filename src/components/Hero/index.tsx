import { HeroTypes } from './types'
import {
    Content,BackgroundHero, Boxtext, TextHero,
    Title, Image
  } from './style'
import { Box, Button, Container} from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import heroimg from '../../imgs/heroimg.png';

  export const Hero = (props: HeroTypes) => {

    return (
      <Content>
        <BackgroundHero>
          <Container maxWidth='xl'>
            <Box display="flex" flexWrap= 'wrap' gap={2} justifyContent='center'>
              <Box  my={4} display='flex' alignItems='start' p={2} flexDirection = 'column'  justifyContent='center' maxWidth={690}>
                <Title>Pré Admissão digital e Gestão Ocupacional em um único lugar!</Title>
                <TextHero>Com a nossa tecnologia, desenvolvemos soluções eficazes para a rotina diária do cliente. Nosso propósito é atendimento humanizado!</TextHero>
                <Button variant='contained'>Agendar uma demonstração gratuita</Button> 
              </Box>
              <Box  my={4} display='flex' alignItems='center' p={2} justifyContent='center' >
                <Image alt="Mountains" src={heroimg} width={420} height={420} />
              </Box>
            </Box>
          </Container>
        </BackgroundHero>
    </Content>
      
    );
  }



