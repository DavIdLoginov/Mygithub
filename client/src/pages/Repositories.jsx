import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getRepositories } from '../services/RepositoriesService';
import RepositoriesPanel from '../organisms/RepositoriesPanel';

const Repositories = () => {
  const [tabValue, setTabValue] = useState(0);
  const [publicRepos, setPublicRepos] = useState([]);
  const [privateRepos, setPrivateRepos] = useState([]);
  const token = localStorage.getItem('accessToken');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const publicRepositories = await getRepositories('public', token);
      setPublicRepos(publicRepositories);

      const privateRepositories = await getRepositories('private', token);
      setPrivateRepos(privateRepositories);
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label={`Публичные репозитории (${publicRepos.length})`} />
        <Tab label={`Приватные репозитории (${privateRepos.length})`} />
      </Tabs>
      {tabValue === 0 && (
        <RepositoriesPanel value={tabValue} repositories={publicRepos} />
      )}
      {tabValue === 1 && (
        <RepositoriesPanel value={tabValue} repositories={privateRepos} />
      )}
    </div>
  );
};

export default Repositories;
