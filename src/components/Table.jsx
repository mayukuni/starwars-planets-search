import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// requisito 2 feito com base no código da revisão
// https://github.com/tryber/sd-013-b-revisao-music-table
function Table() {
  const { data, filter, setFilter } = useContext(PlanetsContext);
  console.log(data);
  const [filterName, setFilterName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [newOptions, setNewOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  // const columnsArray = [
  //   'population',
  //   'orbital_period',
  //   'diameter',
  //   'rotation_period',
  //   'surface_water',
  // ];

  function createNewColumn(oldColumn) {
    const newColumn = [...newOptions];
    newColumn.splice(newColumn.indexOf(oldColumn), 1);
    setNewOptions(newColumn);
  }

  // useEffect(() => {
  //   setFilterName(filterName);
  // }, [filterName, setFilterName]);

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => setFilterName(event.target.value) }
      />
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        { newOptions.map((option) => (
          <option key={ option } value={ option }>{ option }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilter({
            filters: {
              ...filter.filters,
              filterByNumericValues: [
                {
                  column,
                  comparison,
                  value,
                },
              ],
            },
          });
          createNewColumn(column);
        } }
      >
        filtrar
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { data
            .filter((planet) => {
              const values = filter.filters.filterByNumericValues[0];
              let filteredResult = [];
              console.log(values);
              if (values.comparison === 'maior que') {
                filteredResult = Number(planet[values.column]) > Number(values.value);
              } else if (values.comparison === 'menor que') {
                filteredResult = Number(planet[values.column]) < Number(values.value);
              } else if (values.comparison === 'igual a') {
                filteredResult = Number(planet[values.column]) === Number(values.value);
              } return filteredResult;
            })
            .filter((planet) => planet.name.toLowerCase().includes(
              filterName.toLowerCase(),
            ))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
