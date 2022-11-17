import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [tableData, setTableData] = useState();


    useEffect(() => {
      void async function() {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const beers = await response.json();

        const formattedBeerData = beers
        .map(beer => {
          const keyValuePairs = Object.entries(beer)
          const filteredKeyValuePairs = keyValuePairs.filter(([key, value]) => {
            return typeof value === "string"  || typeof value === "number"
          })
          return Object.fromEntries(filteredKeyValuePairs);
        })

        setTableData(formattedBeerData);
      }()
    }, []);



  return (
    <div className="App">
     {tableData
     ? <table>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map(key => 
              <th>{key}</th>
              )}
          </tr>

        </thead>

        <tbody>
          {tableData.map(row => 
            <tr>
              {Object.values(row).map(value => 
                <td>{value}</td>
                )}
            </tr>
            )}
        </tbody>
     </table>
     :<h1>No table data yet</h1>
     }
    </div>
  );
}

export default App;
