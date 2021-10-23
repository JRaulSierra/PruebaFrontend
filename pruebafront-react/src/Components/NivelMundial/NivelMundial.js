import React, { useEffect, useState } from "react";
import virus from "../../img/virus.png"
import death from "../../img/death.png"
import recover from "../../img/recovered.png"
import "../../Style/Mundial.scss"

function NivelMundial() {
  const [datos, setDatos] = useState([]);
  const [confirmados,setConfirmados] = useState("");
  const [deaths,SetDeaths] = useState("");
  const [recovered,SetRecovered] = useState("");

  useEffect(() => {
    fetch(
      "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief"
    )
      .then((data) => data.json())
      .then((data) => setDatos(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (datos !== undefined) {
      setConfirmados(datos.confirmed);
      SetDeaths(datos.deaths);
      SetRecovered(datos.recovered);
    }
  }, [datos]);

  return (
    <div className="bodyMundial">
      <div>
        <h1>Estadisticas a nivel mundial sobre los casos de COVID-19</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div><img src={virus} alt="Logo" width="50px" height="50px"  /></div>
          <div><p>Confirmados</p></div>
          <div>{confirmados}</div>
        </div>
        <div className="card">
          <div><img src={death} alt="Logo" width="50px" height="50px"  /></div>
          <div><p>Fallecidos</p></div>
          <div>{deaths}</div>
        </div>
        <div className="card">
          <div><img src={recover} alt="Logo" width="50px" height="50px"  /></div>
          <div><p>Recuperados</p></div>
          <div>{recovered}</div>
        </div>
      </div>
    </div>
  );
}

export default NivelMundial;
