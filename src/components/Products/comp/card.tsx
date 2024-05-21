
import { ProductsTypes } from '../types'
import {
    TextProducts,
  } from '../style'
import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const CheckText = (props: ProductsTypes) => {

    return ( 
        <Box>
            <TextProducts><CheckIcon color="primary"/>{props.textP}</TextProducts>
        </Box>
    );
}



