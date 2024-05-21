
import { ServiceTypes } from '../types'
import {
     TextService,
    Image,Titlesm
  } from '../style'
import { Box } from '@mui/material';


  export const CardG = (props: ServiceTypes) => {

    return ( 
        <Box>
            <Image alt="Virtus" src={props.image} width={225} height={54}/>
            <Titlesm>{props.titleG}</Titlesm>
            <TextService>{props.textG}</TextService>
        </Box>
    );
  }



