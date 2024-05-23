
import {
    BackgroundAbout, TextAbout,
    Title, Image,Titlesm
  } from './style'
import { Box, Container, Grid} from '@mui/material';
import aboutimg from '../../imgs/sobreimg.png';

  export const About = () => {

    return ( 
      <BackgroundAbout> 
        <Container maxWidth='lg'>
          <Box display="flex" flexWrap= 'wrap' gap={2} justifyContent='center'>
            <Box my={4} display='flex' alignItems='start' p={2} flexDirection = 'column' justifyContent='center' maxWidth={770} className='select'>
              <Title>
              SOBRE NÓS
              </Title>
              <TextAbout>
                Somos mais uma empresa do Grupo Virtus, um grupo voltado para a perfeita integração entre pessoas e empresas. Porque saúde e bem-estar são a chave da boa produtividade.
                Fazendo jus ao nome – VIRTUS, que no Latim, significa virtude – colocamos nossas boas qualidades morais, como força moral, valor, valentia, coragem; à serviço da saúde dos colaboradores de sua empresa, primando por um atendimento diferenciado graças ao esforço em personalizar e humanizar todas as nossas ações junto ao cliente.
                Somos comprometidos com a entrega de um trabalho de alto padrão de qualidade oferecendo tudo o que uma empresa precisa para cuidar da saúde de seus colaboradores desde o ato da admissão até todas as etapas da gestão ocupacional.
                Nossa maior virtude é o zelo com o bem-estar e saúde das pessoas, para assim, colaborar com a maior saúde e produtividade das empresas.
              </TextAbout>
            </Box>
            <Box my={4} display='flex' alignItems='center' p={2} justifyContent='center' className='select' >
              <Image alt="Virtus" src={aboutimg} width={235} height={279} />
            </Box>
          </Box>
          <Box textAlign={'center'} className='select' >
            <Titlesm>HISTÓRICO</Titlesm>
            <TextAbout>A VIRTUS Ocupacional nasceu do êxito e respeito adquirido do Grupo VIRTUS, com 13 anos no mercado oferecendo o melhor a seus clientes.</TextAbout>
          </Box>
          <Grid container spacing={2} textAlign={'center'} justifyContent='center'>
            <Grid sm={12} md={4} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' className='select' >
              <Box>
                <Titlesm>MISSÃO</Titlesm>
                <TextAbout>Nossa missão é oferecer aos nossos clientes toda a expertise e recursos necessários para fomentar a saúde laboral, colaborando diretamente com a melhoria da vida e ambiente</TextAbout>
              </Box>
            </Grid>
            <Grid sm={12} md={4} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' className='select'> 
              <Box>
                <Titlesm>VISÃO</Titlesm>
                  <TextAbout>A VIRTUS Ocupacional pretende ser reconhecida como uma das 10 empresas mais respeitadas e admiradas do segmento de saúde laboral no mercado nacional, dentro dos próximos cinco anos.</TextAbout>
              </Box>
            </Grid>
            <Grid sm={24} md={8} lg={4} display='flex' alignItems='ceter' p={2} flexDirection = 'column' justifyContent='center' className='select' >
              <Box>
                <Titlesm>VALORES</Titlesm>
                <TextAbout>Humanidade, empatia, verdade, transparência, cooperação, humildade, simplicidade, iniciativa, responsabilidade, respeito, tolerância, generosidade, aprendizado contínuo, agilidade e forte senso do outro.</TextAbout>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BackgroundAbout>
      
    );
  }



