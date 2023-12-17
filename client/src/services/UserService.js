import { API_BASE_URL } from "./const";

// user search request

export const handleSearch = async (searchQuery, currentPage, setLoading, setSearchResults, setTotalUsers, setNoResults) => {
  setLoading(true);
  try {
    const response = await fetch(`${API_BASE_URL}/search/users?q=${searchQuery}&page=${currentPage}&per_page=10`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });      
    const data = await response.json();
    setSearchResults(data.items || []);
    setTotalUsers(data.total_count || 0);
    setNoResults(data.items && data.items.length === 0);
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    setLoading(false);
  }
};

// request for public repositories by user

export const handleUserClick = async (username, setUserRepos, setSelectedUser) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });      
    const data = await response.json();
    setUserRepos(data || []);
    setSelectedUser(username);
  } catch (error) {
    console.error('Error fetching user repositories:', error);
  }
};
