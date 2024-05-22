import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {Image} from './style'
import logoheader from '../../imgs/logoheader.png';
import {DrawerComp} from "./drawer";
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../themes/themes'
import { Link } from "react-router-dom";
export const Header = () => {
  const [value, setValue] = useState();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar sx={{ background: "#FFFFFF" , paddingTop:'13px',paddingBottom:'13px' ,opacity: 0.9}}>
          <Toolbar sx={{ maxWidth:'1110px', margin:'0px auto', width:'100%' , justifyContent:'space-between'}}>
            <Image alt="Virtus" src={logoheader} width={192} height={60} />
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
              <>
              <Tabs sx={{ marginLeft: "auto" }} indicatorColor="secondary" textColor="secondary" value={value} onChange={(e, value) => setValue(value)}>
                  <Tab component={Link} to='/Hero' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Home" />
                  <Tab component={Link} to='/About' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Quem Somos" />
                  <Tab component={Link} to='/Services' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Serviços" />
                  <Tab component={Link} to='/Products' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Produtos" />
                  <Tab component={Link} to='/Plans' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Planos" />
                  <Tab component={Link} to='/Blog' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Blog" />
                  <Tab component={Link} to='/Contact' sx={{ fontWeight: '600', fontSize: '14px', fontFamily: '"Roboto", Sans-serif', color: '#7a7a7a' }} label="Contato" />
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


