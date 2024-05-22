import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from '@mui/icons-material/Person';
const pages = ["Home","Quem Somos", "Serviços", "Produtos", "Planos","Blog","Contato"];
export const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment >
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            
          ))}
        </List>
        <List>
            <ListItemButton >
              <ListItemIcon>
                <ListItemText><Button sx={{ marginLeft: "auto" }} variant="contained"  startIcon={< PersonIcon/>}>
                Área do cliente
              </Button></ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="primary" sx={{ padding: "0", paddingRight:"35px" }} />
      </IconButton>
    </React.Fragment>
  );
};


