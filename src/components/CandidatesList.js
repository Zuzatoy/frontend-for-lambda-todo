import React, { useState, useEffect } from 'react';

export default function CandidatesList () {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://0x5wgwk3t8.execute-api.ap-southeast-2.amazonaws.com/dev/candidates', {
        method: "GET",
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        }})
          .then(response => response.json())
          .then(({ data }) => {
            setData(data);
            console.log(1111, data)
          })
        }, []);


    return (
        <div>
            Yo
        </div>

    )
}