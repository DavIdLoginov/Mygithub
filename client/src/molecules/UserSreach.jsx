import React from 'react';
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material';

const UserSreach = ({ searchQuery, setSearchQuery, performSearch, loading, noResults }) => (
  <Box>
    <TextField
      id="standard-basic"
      type="text"
      label="Поиск пользователей"
      variant="standard"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <Button variant="contained" color="primary" onClick={performSearch}>
      Найти
    </Button>
    {loading && <CircularProgress />}
    {noResults && <Typography variant="body1">Нет найденных пользователей</Typography>}
  </Box>
);

export default UserSreach;
