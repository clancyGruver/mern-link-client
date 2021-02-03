import React, { useCallback, useContext, useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';
import { Loader } from '../components/Loader';
import { LinksList } from '../components/LinksList';


export const LinksPage = () => {

  const [links, setLinks] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchedLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      setLinks(fetched);
    } catch (error) {
      
    }
  }, [token, request]);

  useEffect(() => {
    fetchedLinks();
  }, [fetchedLinks]);

  if (loading) {
    return (<Loader />)
  }

  return (
    <>
      { !loading && links && <LinksList links={links}/> }
    </>
  );
}