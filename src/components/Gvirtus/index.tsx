import gvirtusimg from '../../imgs/sobreimg.png';
import banco from '../../imgs/banco.png';
import digital from '../../imgs/digital.png';
import gestao from '../../imgs/gestao.png';
import onboard from '../../imgs/onboard.png';
import saude from '../../imgs/saude.png';
import search from '../../imgs/search.png';
import {
    Content,BackgroundGvirtus, TextGvirtus,
    Title, Image,
  } from './style'
import { Box, Container, Grid, } from '@mui/material';
import { CardG } from './comp/card';


  export const Gvirtus = () => {

    return ( 
      <Content>
        <BackgroundGvirtus> 
          <Container maxWidth='lg'>
            <Box display="flex" flexWrap= 'wrap' gap={2} justifyContent='center'>
              <Box my={4} display='flex' alignItems='start' p={2} flexDirection = 'column' justifyContent='center' maxWidth={770}>
                <Title>
                O GRUPO VIRTUS
                </Title>
                <TextGvirtus>
                O Grupo Empresarial  Virtus, é voltado para a perfeita integração entre pessoas e empresas.
                </TextGvirtus>
                <TextGvirtus>
                Possuímos um portifólio de produtos e serviços integrados e inovadores que visam oferecer a seus clientes soluções exclusivas e sob medida para facilitar e simplificar os desafios quanto a captação, retenção e gestão dos talentos das organizações.
                </TextGvirtus>
                <TextGvirtus>
                Composto por um quadro de consultores e profissionais próprios e contando com uma ampla rede de parceiros credenciadas e certificados em nossos produtos, metodologia de trabalhos e legislações vigentes. Desta forma conseguimos atender de ponta a ponta a necessidade de nossos clientes em todo território nacional.
                </TextGvirtus>
              </Box>
              <Box my={4} display='flex' alignItems='center' p={2} justifyContent='center' >
                <Image alt="Virtus" src={gvirtusimg} width={235} height={279} />
              </Box>
            </Box>
            <Grid container spacing={2} textAlign='center' justifyContent='center' alignItems='start'>
              <Grid sm={12} md={4} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {search} titleG = {'HUNTING & SEARCH'} textG = {'Encontrar, recrutar e selecionar talentos'}/>
              </Grid>
              <Grid sm={12} md={4} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {saude} titleG = {'SAÚDE E SEGURANÇA OCUPACIONAL'} textG = {'Exames, laudos, treinamentos presenciais e EAD'}/>
              </Grid>
              <Grid sm={12} md={12} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {digital} titleG = {'DIGITAL BOARDING'} textG = {'Análise e gestão de documentação admissional'}/>
              </Grid>
              <Grid sm={12} md={4} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {gestao} titleG = {'GESTÃO DE BENEFÍCIOS'} textG = {'Clube de benefícios, saúde, dental, vida e previdência'}/>
              </Grid>
              <Grid sm={12} md={4} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center'> 
                <CardG image = {onboard} titleG = {'ONBOARDING'} textG = {'Integração e desenvolvimento contínuo'}/>
              </Grid>
              <Grid sm={12} md={8} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' >
                <CardG image = {banco} titleG = {'BANCO DE TALENTOS'} textG = {'Elaboração, implantação e políticas'}/>
              </Grid>
            </Grid>
          </Container>
        </BackgroundGvirtus>
    </Content>
      
    );
  }



