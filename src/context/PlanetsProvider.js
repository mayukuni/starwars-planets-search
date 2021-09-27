import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import fetchApi from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      let response = await fetch('https://swapi.dev/api/planets/');
      response = await response.json();
      setData(response.results);
      // outro jeito de fazer a requisição
      // const { results } = await fetch('https://swapi.dev/api/planets/').then((res) => res.json());
      // setData(results);
    }
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
