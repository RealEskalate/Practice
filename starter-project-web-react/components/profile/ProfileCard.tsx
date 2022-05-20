import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LocationOn from '@mui/icons-material/LocationOn';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { Button, CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';

const ProfileCard = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box sx={{ width: '25%', m: 10 }}>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >

          <Avatar />
        </Grid>

        <Card>
          <CardHeader
            title="Alec Thompson"
            subheader="CEO / CO-FOUNDER"
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <LocationOn /> Scranton, PA
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aliquam voluptatibus sint accusamus sit cupiditate at cumque doloribus nesciunt, deserunt, nam perspiciatis, sapiente itaque? Totam rerum beatae hic facilis quia?
            </p>
          </CardContent>

          <Switch /> Online
        </Card>



      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          width: '50%',
          m: 5
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
          
        </div>
        <Button variant="contained" color="success">
            Update
          </Button>
      </Box>
      
    </Grid>


  );
}


export default ProfileCard;