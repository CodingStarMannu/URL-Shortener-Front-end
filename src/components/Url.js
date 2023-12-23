import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Url() {
  const [url,setUrl] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {

    if (e.target.name === 'url') setUrl(e.target.value);
  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const authToken = sessionStorage.getItem('authToken');
        console.log("authToken:", authToken);
        const response = await fetch('http://localhost:3000/url/shorten', {
            method: 'POST',
            headers: {  
              'Content-Type': 'application/x-www-form-urlencoded',
               'Authorization': `Bearer ${authToken}` 
            },
        body: JSON.stringify({
          url: url
        }),
      });

      if (response.ok) {
        console.log('Url shortened successful');
        navigate('/'); 
      } else {
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Error in Shorten url:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mt:-10 }}>
            Url Shortener
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="url"
              label="Destination Url"
              name="url"
              autoComplete="url"
              autoFocus
              value={url}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Create New
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
