import React, { useState } from 'react'

function Agepredict() {
    const [person ,setPerson] = useState("");
    const [predictedAge ,setPredictedAge] = useState(null);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
          setPredictedAge(res.data);
        });
      };

  return (
    <div>
        <input 
        placeholder='Ex. njuguna...'
        onChange={(event) => {
          setPerson(event.target.value);
        }} 
        />
        <button onClick={fetchData}> Predict Age</button>

        <h1>Person: {predictedAge?.person}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Count: {predictedAge?.count}</h1>
    </div>
  )
}

export default Agepredict