import Servicesimg from '../../imgs/sobreimg.png';
import banco from '../../imgs/banco.png';
import digital from '../../imgs/digital.png';
import gestao from '../../imgs/gestao.png';
import onboard from '../../imgs/onboard.png';
import saude from '../../imgs/saude.png';
import search from '../../imgs/search.png';
import {
    Content,BackgroundServices, 
    Title, 
  } from './style'
import { Box, Container, Grid, } from '@mui/material';
import { CardG } from './comp/card';


  export const Services = () => {

    return ( 
      <Content>
        <BackgroundServices> 
          <Container maxWidth='lg'>
            <Box textAlign='center'>
              <Title>
                SERVIÇOS
              </Title>
            </Box>
            <Grid container spacing={2} textAlign='center' justifyContent='center' alignItems='start'>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {search} titleG = {'HUNTING & SEARCH'} textG = {'Encontrar, recrutar e selecionar talentos'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {saude} titleG = {'SAÚDE E SEGURANÇA OCUPACIONAL'} textG = {'Exames, laudos, treinamentos presenciais e EAD'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {digital} titleG = {'DIGITAL BOARDING'} textG = {'Análise e gestão de documentação admissional'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {gestao} titleG = {'GESTÃO DE BENEFÍCIOS'} textG = {'Clube de benefícios, saúde, dental, vida e previdência'}/>
              </Grid>

              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {onboard} titleG = {'ONBOARDING'} textG = {'Integração e desenvolvimento contínuo'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {banco} titleG = {'BANCO DE TALENTOS'} textG = {'Elaboração, implantação e políticas'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {onboard} titleG = {'ONBOARDING'} textG = {'Integração e desenvolvimento contínuo'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {banco} titleG = {'BANCO DE TALENTOS'} textG = {'Elaboração, implantação e políticas'}/>
              </Grid>
            </Grid>
          </Container>
        </BackgroundServices>
    </Content>
      
    );
  }



