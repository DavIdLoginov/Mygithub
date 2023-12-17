import React, { useState } from 'react';
import UserSearch from '../organisms/UserSreach';
import { handleSearch, handleUserClick } from '../services/UserService';


const OtherUserPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  const performSearch = async () => {
    await handleSearch(searchQuery, currentPage, setLoading, setSearchResults, setTotalUsers, setNoResults);
  };

  const performUserClick = async (username) => {
    await handleUserClick(username, setUserRepos, setSelectedUser);
  };

  return (
    <UserSearch
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      performSearch={performSearch}
      loading={loading}
      noResults={noResults}
      searchResults={searchResults}
      totalUsers={totalUsers}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      handleUserClick={performUserClick}
      selectedUser={selectedUser}
      userRepos={userRepos}
    />
  );
};

export default OtherUserPage;