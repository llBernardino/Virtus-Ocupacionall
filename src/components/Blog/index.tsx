import {BackgroundBlog,Title} from './style'
import { Box, Container, Grid, } from '@mui/material';
import { CardB } from './comp/card';

  export const Blog = () => {
    return ( 
      <BackgroundBlog> 
        <Container maxWidth='lg'>
          <Box my={4} display='flex'  justifyContent='center' className='select'>
            <Title>BLOG</Title>
          </Box>
          <Grid container textAlign='center' justifyContent='center' alignItems='start'>
            <Grid sm={12} md={4} lg={4} display='flex' alignItems='center' p={2} flexDirection = 'column' justifyContent='center' className='select' >
              <CardB  titleG = {'SP ZERA ICMS DE EQUIPAMENTOS HOSPITALARES IMPORTADOS'} textG = {'As Secretarias de Estado da Saúde e da Fazenda assinaram nesta sexta-feira, 18 de março, resolução estabelecendo isenção da cobrança de ICMS (Imposto sobre Circulação de Mercadorias e Prestação de Serviços) para a importação de equipamentos médico-hosp…'}/>
            </Grid>
            <Grid sm={12} md={4} lg={4} display='flex' alignItems='center' p={2} flexDirection = 'column' justifyContent='center' className='select'> 
              <CardB titleG = {'NSTITUTO EMÍLIO RIBAS PROMOVE SIMPÓSIO PARA DISCUTIR AIDS SOB A ÓTICA DA NEUROLOGIA'} textG = {'O Instituto de Infectologia Emilio Ribas, da Secretaria de Estado da Saúde, promove no dia 2 de abril, a partir das 8h, simpósio sobre os cruzamentos entre a neurologia e o tratamento da Aids. O evento terá o tema “Neuro/Aids – Multidiscip…'}/>
            </Grid>
            <Grid sm={12} md={12} lg={4} display='flex' alignItems='center' p={2} flexDirection = 'column' justifyContent='center' className='select' >
              <CardB titleG = {'SAÚDE PROMOVE CAMPANHA SANGUE CORINTIANO NESTE FINAL DE SEMANA'} textG = {'A Secretaria de Estado da Saúde de São Paulo promove sábado e domingo, 19 e 20 de março, por intermédio da Fundação Pró-Sangue, a primeira rodada da campanha ‘Sangue Corintiano’ em 2011. A iniciativa conta com o apoio do Sport Clube Corinthians Pau…'}/>
            </Grid>
            <Grid sm={12} md={4} lg={4} display='flex' alignItems='center' p={2} flexDirection = 'column' justifyContent='center' className='select' >
              <CardB  titleG = {'PRESENÇA FAMILIAR GARANTE SUCESSO DA REABILITAÇÃO DE DEPENDENTES QUÍMICOS'} textG = {'Levantamento produzido pela Clínica de Reabilitação Mental do hospital estadual de Taipas, unidade da Secretaria de Estado da Saúde, aponta que a presença da família é fundamental para a recuperação de dependentes de álcool e outras drogas. O serviç…'}/>
            </Grid>
            <Grid sm={12} md={4} lg={4} display='flex' alignItems='center' p={2} flexDirection = 'column' justifyContent='center' className='select'> 
              <CardB titleG = {'SAÚDE PROMOVE PALESTRAS SOBRE PEDOFILIA'} textG = {'Com o objetivo de alertar a população quanto à pedofilia, o AME (Ambulatório Médico de Especialidades) Jardim dos Prados, da Secretaria de Estado da Saúde realizará, a partir de amanhã, 18 de março, palestras aberta à comunidade, no auditório do S…'}/>
            </Grid>
            <Grid sm={12} md={8} lg={4} display='flex' alignItems='center' p={2} flexDirection = 'column' justifyContent='center' className='select' >
              <CardB  titleG = {'SP VAI TESTAR ACUPUNTURA PARA TRATAR EFEITO COLATERAL DO TRATAMENTO CONTRA HIV'} textG = {'A Secretaria de Estado da Saúde de São Paulo, por intermédio do Centro de Referência e Treinamento em DST/Aids, irá testar a aplicação de sessões de acupuntura para tratar lipodistrofia, efeito colateral do tratamento de pacientes soropositivos com ant…'}/>
            </Grid>
          </Grid>
        </Container>
      </BackgroundBlog>
  
      
    );
  }



