import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

// const PlanetsContext = createContext();

function App() {
  // const [planets, setPlanets] = useState([]);
  // useEffect(() => {
  //   async function fetchApi() {
  //     let response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  //     response = await response.json();
  //     setPlanets(response.results);
  //     // outro jeito de fazer a requisição
  //     // const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((res) => res.json());
  //   }

  //   fetchApi();
  // });
  return (
    <div>
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
