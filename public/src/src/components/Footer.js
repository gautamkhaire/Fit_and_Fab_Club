import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo1.png';

const Footer = () => (
  <div>
    <Box mt="80px" bgcolor="#4169E1">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="5px">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
      </Stack>
      <Typography variant="h5" color="common.white" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" mt="-20px" pb="40px">Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.</Typography>
    </Box>
  </div>
);

export default Footer;