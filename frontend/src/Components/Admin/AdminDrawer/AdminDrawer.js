import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AdminDrawer({state, setState}) {
    const history = useHistory()
  return( 
    <div>
        {/* <Button onClick={()=>setState(true)}>Click</Button> */}
        
        <Drawer
            anchor="left"
            open={state}
            onClose={()=>setState(false)}

        >
            <Box sx={{width: 240}}>
            <List>
                <ListItem button onClick={()=>history.push('/admin/mobileView')}>
                    <ListItemText primary="Mobiles View"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/laptopView')}>
                    <ListItemText primary="Laptops View"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/tabletView')}>
                    <ListItemText primary="Tablets View"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/feedback')}>
                    <ListItemText primary="Feedback View"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/mobilePost')}>
                    <ListItemText primary="Mobiles Post"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/laptopPost')}>
                    <ListItemText primary="Laptop Post"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/tabletPost')}>
                    <ListItemText primary="Tablet Post"/>

                </ListItem>

                <ListItem button onClick={()=>history.push('/admin/blog')}>
                    <ListItemText primary="Blog"/>

                </ListItem>

                {/* <ListItem button onClick={()=>history.push('/admin/tabletPost')}>
                    <ListItemText primary="Tablet Post"/>

                </ListItem> */}
            </List>
            {/* <p>New1</p> */}
            </Box>

        </Drawer>
    </div>
);
}

export default AdminDrawer;
