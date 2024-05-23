import {
    Content,BackgroundProducts,
    Title, Image
  } from './style'
import { Box, Container,} from '@mui/material';
import products from '../../imgs/products.png';
import { CheckText } from './comp/card';
  export const Products = () => {

    return (
      <Content>
        <BackgroundProducts>
          <Container maxWidth='lg'>
            <Box display="flex" flexWrap= 'wrap' gap={2} justifyContent='center' >
              <Box my={4} display='flex' alignItems='start' p={2} flexDirection = 'column'  justifyContent='center' maxWidth={652} className='select'>
                <Title>PRODUTOS</Title>
                <CheckText  textP={'Admissão digital'} />
                <CheckText  textP={'Software de gestão de saúde e Ocupacional'} />
                <CheckText  textP={'Treinamentos legais presenciais e EAD'} />
                <CheckText  textP={'Projetos de rh através de Braço especializado de RH'} />
                <CheckText  textP={'Recrutamento'} />
                <CheckText  textP={'Educação corporativa'} />
                <CheckText  textP={'Treinamento e desenvolvimento'} />
                <CheckText  textP={'EAD'} />
                <CheckText  textP={'Projetos de estruturação de RH (Politicas, Processos, Participação nos lucros e resultados da empresa, Avaliação de desempenho e competências...)'} />
                <CheckText  textP={'Mentoria'} />
                <CheckText  textP={'Coaching de carreira, orientação profissional, life coaching e Executive coaching'} />
                <CheckText  textP={'Outsourcing de rh'}/>
              </Box>
              <Box my={4} display='flex' alignItems='center' p={2} justifyContent='center' className='select'>
                <Image alt="produtos" src={products} width={349} height={362} />
              </Box>
            </Box>
          </Container>
        </BackgroundProducts>
    </Content>
      
    );
  }



