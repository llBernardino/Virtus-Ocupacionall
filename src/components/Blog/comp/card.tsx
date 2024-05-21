
import { BlogTypes } from '../types'
import {
     TextBlog,
    Titlesm
  } from '../style'
import { Box } from '@mui/material';

export const CardB = (props: BlogTypes) => {

    return ( 
        <Box sx={{ background: '#64cbe8', border: '0px solid #54595f', boxShadow: '0 0 10px 0 rgba(0,0,0,.15)' }} maxWidth={353} minHeight={215} padding={2} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Titlesm>{props.titleG}</Titlesm>
            <TextBlog>{props.textG}</TextBlog>
            <b>Ler mais</b>
        </Box>
    );
}



