import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'api'

export const FibPage = () => {

  const [index, setIndex] = useState(0);
  const [seenIndexes, setSeenIndexes] = useState([])
  const [values, setValues] = useState({});

  useEffect(() => {
    fetchSeenIndexes()
    fetchValues();
  }, []);

  const fetchSeenIndexes = async () => {
    const data = await axios.get(`${BASE_URL}/values/all`)
    const indeces = data.data.map(item => item.number);
    setSeenIndexes(indeces || []);
  }

  const fetchValues = async () => {
    const data = await axios.get(`${BASE_URL}/values/current`);
    setValues(data.data);
  }

  const handleSubmit = async () => {
    axios.post(`${BASE_URL}/values`, { index })
  }

  const renderSeenIndexes = () => {
    return seenIndexes.join(',');
  }

  const renderCalculatedValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key} >
          For Index {key} The Calculated value is {values[key]}
        </div>
      )
    }
    return entries
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label> Enter Your Index: </label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button type="submit"> submit  </button>
      </form>
      <h3> Indexes I have seen </h3>
      {renderSeenIndexes()}
      <h3> Calculated Values </h3>
      {renderCalculatedValues()}
    </div>
  )
}