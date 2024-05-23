import {
    BackgroundPlans, 
    Title,
    TextPlans, 
  } from './style'
import { Box, Button, Container, Grid, ThemeProvider, } from '@mui/material';
import {theme} from '../../themes/themes'


  export const Plans = () => {

    return ( 
      <ThemeProvider theme={theme}>
        <BackgroundPlans> 
          <Container maxWidth='lg'>
            <Box textAlign='center' >
              <Title>
                PLANOS
              </Title>
              <Grid container spacing={2} textAlign='center' justifyContent='center' alignItems='start' className='select'>
                <Grid sm={12} md={5} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                  <Button  color={'primary'} variant='contained'>Fale com um especialista</Button> 
                </Grid>
                <Grid sm={12} md={5} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' > 
                  <Button  color={'primary'} variant='contained'>Diagnóstico Gratuito e-Social</Button> 
                </Grid>
                <Grid sm={12} md={5} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'  >
                  <Button  color={'primary'} variant='contained'>Orçamento Online</Button> 
                </Grid>
              </Grid>
              <Box my={2} className='select'>
                <TextPlans>Em nossa gestão e assessoria vocês assinara a franquia que concedera o acesso aos documentos base de sua operação, tendo a responsabilidade legal por 12, 24 ou até 36 meses. GRO e PGR, PCMSO, Insalubridade, Periculosidade, Análise Ergonômica, LTCAT, PPP.</TextPlans>
                <TextPlans>O valor da assinatura será gerado de forma recorrente durante a vigência mínima de 12 meses, além das tarifas serem mais baratas, você pode ajustar todo mês a quantidade de funcionários e o valor da mensalidade. </TextPlans>
              </Box>
              <Grid container spacing={2} textAlign='center' justifyContent='center' alignItems='start' my={2} className='select'>
                <Grid sm={12} md={5} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                  <Button  color={'primary'} variant='outlined'>PLANO PREMIUM ECON​ÔMICO</Button> 
                </Grid>
                <Grid sm={12} md={5} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                  <Button  color={'primary'} variant='outlined'>PLANO PREMIUM INTER GERENCIAMENTO</Button> 
                </Grid>
                <Grid sm={12} md={5} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                  <Button  color={'primary'} variant='outlined'>PLANO PREMIUM MASTER GERENCIAMENTO</Button> 
                </Grid>
              </Grid>
            </Box>
          </Container>
        </BackgroundPlans>
    </ThemeProvider >
      
    );
  }



