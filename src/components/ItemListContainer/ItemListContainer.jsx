import * as React from "react";
// import ListSubheader from '@mui/material/ListSubheader';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CasesSharpIcon from "@mui/icons-material/CasesSharp";
import WalletSharpIcon from "@mui/icons-material/WalletSharp";


const ItemListContainer = () =>  {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
        <ListItemButton>
        <ListItemIcon>
          <WalletSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Billeteras" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <CasesSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Carteras" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Clásicas" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Vintage" />
          </ListItemButton>
        </List>
        </Collapse>
    </List>
  );
}
export default ItemListContainer