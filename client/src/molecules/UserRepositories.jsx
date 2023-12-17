import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const UserRepositories = ({ selectedUser, userRepos }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Публичные репозитории пользователя {selectedUser}
    </Typography>
    {userRepos.length === 0 ? (
      <Typography variant="body1">У пользователя нет открытых репозиториев</Typography>
    ) : (
      <List>
        {userRepos.map((repo) => (
          <ListItem key={repo.id}>
            <ListItemText
              primary={
                <Typography variant="subtitle1">
                  <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </Link>
                </Typography>
              }
              secondary={<Typography variant="body2">{repo.description}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    )}
  </Box>
);

export default UserRepositories;
