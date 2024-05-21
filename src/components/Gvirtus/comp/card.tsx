
import { GvirtusTypes } from '../types'
import {
     TextGvirtus,
    Image,Titlesm
  } from '../style'
import { Box } from '@mui/material';

export const CardG = (props: GvirtusTypes) => {

    return ( 
        <Box>
            <Image alt="Virtus" src={props.image} width={144} height={144}/>
            <Titlesm>{props.titleG}</Titlesm>
            <TextGvirtus>{props.textG}</TextGvirtus>
        </Box>
    );
}



