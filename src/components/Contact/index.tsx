import {
    Content,BackgroundContact, 
    Title,
    TextContact, Image,
    Titlesm,
    TextContactB
  } from './style'
  import {theme} from '../../themes/themes'
  import gvirtusimg from '../../imgs/sobreimg.png';
import { Box,  Button,  Container, Grid, TextField, ThemeProvider, } from '@mui/material';

  export const Contact = () => {

    return ( 
      <ThemeProvider theme={theme}>
        <BackgroundContact> 
          <Container maxWidth='lg'>
            <Box textAlign='center'>
              <Title>
                CONTATO
              </Title>
            </Box>
              <Grid container justifyContent={'center'}>
                <Grid sm={12} md={5} lg={4} my={3} >
                  <Image alt="Virtus" src={gvirtusimg} width={62} height={73} />
                  <Titlesm>MANTENHA CONTATO</Titlesm>
                  <TextContact>Caso queira mais informações entre em contato através do email, telefone ou deixe mensagem por meio do formulário de contato. Você será contatado o mais breve possível.</TextContact>
                </Grid>
                <Grid sm={12} md={5} lg={4} my={3} > 
                  <Titlesm>INFORMAÇÕES:</Titlesm>
                  <TextContactB>ENDEREÇO:</TextContactB>
                  <TextContact>Rua do Bosque, 1621 CEP 1136001 - Barra Funda - São Paulo/SP</TextContact>
                  <TextContactB>TELEFONE:</TextContactB>
                  <TextContact>(11) 3675-7241</TextContact>
                  <TextContact>(11) 9-9492-1141</TextContact>
                  <TextContactB>E-MAIL:</TextContactB>
                  <TextContact>comercial@virtusocupacional.com.br</TextContact>
                  <TextContactB>HORÁRIO DE FUNCIONAMENTO:</TextContactB>
                  <TextContact>Segunda à Quinta – 8h às 18h</TextContact>
                  <TextContact>Sexta – 8h às 17h</TextContact>
                </Grid>
                <Grid sm={12} md={5} lg={4} px={5}>
                  <TextField
                    id="nome"
                    label="Nome"
                    placeholder="Seu nome"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    placeholder="Seu email"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                  <TextField
                    id="telefone"
                    label="Telefone"
                    placeholder="(DDD) + Número"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                  <TextField
                    id="mensagem"
                    label="Mensagem"
                    placeholder="Sua mensagem"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    margin="dense"
                  />
                  <Button variant="contained" color="success" sx={{ color: "white", borderRadius:'25px'}} >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
          </Container>
        </BackgroundContact>
    </ThemeProvider>
      
    );
  }



