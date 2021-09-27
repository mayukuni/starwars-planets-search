import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// requisito 2 feito com base no código da revisão
// https://github.com/tryber/sd-013-b-revisao-music-table
function Table() {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  const [filterName, setFilterName] = useState('');
  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => setFilterName(event.target.value) }
      />
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
