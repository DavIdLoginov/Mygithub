import UserListItem from "../molecules/UserListItem";
import {
  Typography,
  Box,
  Grid,
  List,
} from "@mui/material";
import UserPagination from "../molecules/UserPagination";
import SearchForm from "../molecules/UserSreach";
import UserRepositories from "../molecules/UserRepositories";

const UserSearch = ({
  searchQuery,
  setSearchQuery,
  performSearch,
  loading,
  noResults,
  searchResults,
  totalUsers,
  currentPage,
  handleUserClick,
  selectedUser,
  userRepos,
  setCurrentPage,
}) => (
  <Box m={2}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          performSearch={performSearch}
          loading={loading}
          noResults={noResults}
        />
        {searchResults.length > 0 && (
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Найдено пользователей: {totalUsers}
            </Typography>
            <List>
              {searchResults.map((user) => (
                <UserListItem
                  key={user.id}
                  user={user}
                  onClick={handleUserClick}
                />
              ))}
            </List>
            <UserPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              performSearch={performSearch}
            />
          </div>
        )}
      </Grid>
      <Grid item xs={6}>
        {selectedUser && (
          <UserRepositories selectedUser={selectedUser} userRepos={userRepos} />
        )}
      </Grid>
    </Grid>
  </Box>
);

export default UserSearch;
