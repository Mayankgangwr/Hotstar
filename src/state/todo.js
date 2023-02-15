import {useState} from 'react';

export default function Todo() {
const initialState = [
    {id: 1, name: 'Mayank Gangwar', country: 'India'},
    {id: 2, name: 'Prince Kurmi', country: 'India'},
  ];

  const [employees, setEmployees] = useState(initialState);

  return (
    <div>
      {employees.map(({id, name, country}) => {
        return (
          <div key={id}>
            <h2>name: {name}</h2>
            <h2>country: {country}</h2>
            
            <hr />
          </div>
        );
      })}
    </div>
  );
}
