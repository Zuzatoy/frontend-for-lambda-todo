import React, { useState, useEffect } from 'react';

export default function CandidatesList () {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://0x5wgwk3t8.execute-api.ap-southeast-2.amazonaws.com/dev/candidates', {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
          .then(response => response.json())
          .then((data) => {
            setData(data);
            console.log(1111, data)
          })
        }, []);

        console.log(123, data.candidates)

    return (
        <div>
            <p>
                Here is the list of candidates. Can you see yourself?
            </p>
              <div>  
                {data.candidates ? (data.candidates.map(({ id, email, fullname }) => (
                    <div key={id}>
                        <div>
                            <span>{fullname}</span>
                        </div>
                    </div> 
                ))) : <p>Sosat</p>}
            </div>
        </div>
    )
}
