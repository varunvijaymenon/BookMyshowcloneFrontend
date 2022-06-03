import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import CinemaCard from '../CinemaCard';



export function DeleteCinemas() {

  const [cinema, setCinema] = useState([]);

  
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  // client.connect(err => {
  // const collection = client.db("bookmyshow").collection("cinema");
  // // perform actions on the collection object
  // // client.close();
  // });


    const getCinemas = async () => {
        // dispatch(getMoviesRequest);
        return axios.get("https://guvi-hackathon2.herokuapp.com/cinemas")
            .then(res => res.data).then((data) => setCinema(data))
            .catch(error => error);
          };
    useEffect(() => {getCinemas()},[]);

  return (
    <div>
      {cinema.map(m => <CinemaCard id={m.id} name={m.name} sub_region={m.sub_region}/>)}
    </div>
  )
}



