import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  });

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
  };

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
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
