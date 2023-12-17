import React from 'react';
import { List, ListItem, ListItemText, Typography, Link, Box } from '@mui/material';

const RepositoriesPanel = ({ value, repositories }) => {
  const renderRepositories = (repos) => (
    <List>
      {repos.map((repo) => (
        <ListItem key={repo.id}>
          <ListItemText
            primary={
              <Typography variant="subtitle1">
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </Link>
              </Typography>
            }
            secondary={
              <Typography variant="body2">
                Owner: {' '}
                <Link href={repo.owner.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.owner.login}
                </Link>
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        {`Найдено ${repositories.length} ${value === 0 ? 'публичных' : 'приватных'} репозиториев`}
      </Typography>
      <div>
        {renderRepositories(repositories)}
      </div>
    </Box>
  );
};

export default RepositoriesPanel;
