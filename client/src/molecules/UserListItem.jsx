import React from 'react';
import { Avatar, ListItem, ListItemText, Link } from '@mui/material';

const UserListItem = ({ user, onClick }) => (
  <ListItem key={user.id}>
    <Avatar alt={user.login} src={user.avatar_url || `https://www.gravatar.com/avatar/${user.login}?d=identicon`} />
    <ListItemText>
      <Link href="#" onClick={() => onClick(user.login)}>
        {user.login}
      </Link>
    </ListItemText>
  </ListItem>
);

export default UserListItem