import React, { useState, useEffect } from 'react';
import '../stylesheets/data_table.css'

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetching data from the backend
    const fetchData = async () => {
      try {
       
        const response = await fetch('http://localhost:5000/data'); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th>Vaccinated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{formatDate(item.birthDate)}</td>
              <td>{item.vaccinated ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}

export default DataTable;