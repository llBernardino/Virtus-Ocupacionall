import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {Image} from './style'
import logoheader from '../../imgs/logoheader.png';
import {DrawerComp} from "./drawer";
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../themes/themes'
export const Header = () => {
  const [value, setValue] = useState();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar sx={{ background: "#FFFFFF" , paddingTop:'20px',paddingBottom:'20px' ,opacity: 0.9}}>
          <Toolbar sx={{ maxWidth:'1110px', margin:'0px auto', width:'100%' , justifyContent:'space-between'}}>
            <Image alt="Virtus" src={logoheader} width={192} height={60} />
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto"}} 
                  indicatorColor="secondary"
                  textColor="secondary"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Home" />
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Quem Somos" />
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Serviços" />
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Produtos" />
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Planos" />
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Blog" />
                  <Tab sx={{ fontWeight:'600', fontSize:'14px', fontFamily:'"Roboto", Sans-serif', color:'#7a7a7a'}}  label="Contato" />
                </Tabs>
                <Button sx={{ marginLeft: "auto" , color:'white' }} variant="contained"  startIcon={< PersonIcon/>} color="success">
                  Área do cliente
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </ThemeProvider>
  );
};


