import medic from '../../imgs/medic.svg';
import signa from '../../imgs/signa.svg';
import clipboard from '../../imgs/clipboard.svg';
import book from '../../imgs/book.svg';
import desktop from '../../imgs/desktop.svg';
import usershield from '../../imgs/usershield.svg';
import street from '../../imgs/street.svg';
import wpforms from '../../imgs/wpforms.svg';
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
                <CardG image = {street} titleG = {'CIPA ONLINE'} textG = {'Treinamento de CIPA 100% online, com um sistema especializado para tornar essa experiência única.'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {usershield} titleG = {'PGR E PCMSO'} textG = {'Medidas que evitam acidentes de trabalho e diminuem os riscos de doenças ocupacionais.'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {clipboard} titleG = {'E-SOCIAL'} textG = {'Validamos os documentos e legalidade junto ao E-social de forma automática.'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {book} titleG = {'TREINAMENTOS PRESENCIAIS E EAD'} textG = {'Primeiros Socorros , EPI’s, Trabalho em Altura, NR10, Reciclagem de Empilhadeira, entre outros.'}/>
              </Grid>

              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {desktop} titleG = {'AUTO AGENDAMENTO'} textG = {'Pode ser feito diretamente pelo colaborador, pela empresa…'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {signa} titleG = {'GESTÃO OCUPACIONAL E DE EXAMES'} textG = {'Atua na diminuição da margem de erro e redução de custos.'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {medic} titleG = {'EXAMES MÉDICOS (ASO DIGITAL)'} textG = {'O médico assina digitalmente o ASO e em seguida sobe para a nossa plataforma.'}/>
              </Grid>
              <Grid sm={12} md={5} lg={3} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {wpforms} titleG = {'APLICAÇÃO DE TODAS AS NRs' } textG = {'A aplicação das NRs promove a integridade, o bem-estar e a satisfação dos trabalhadores.'}/>
              </Grid>
            </Grid>
          </Container>
        </BackgroundServices>
    </Content>
      
    );
  }



