import React, { useEffect, useState } from "react";
import virus from "../../img/virus.png";
import death from "../../img/death.png";
import recover from "../../img/recovered.png";
import "../../Style/CA.scss";

function CentroAmerica() {
  const [datos, setDatos] = useState();
  const [data, setData] = useState();
  const [confirmados, setConfirmados] = useState("");
  const [deaths, SetDeaths] = useState("");
  const [recovered, SetRecovered] = useState("");

  const handlerPais = async (e) => {
    await fetch(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${e}`
    )
      .then((data) => data.json())
      .then((data) => setDatos(data))
      .catch((error) => {
        console.log(error);
      });

    tabla(e);
  };

  const tabla = async (e) => {
    await fetch(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${e}`
    )
      .then((data) => data.json())
      .then( (data) => setData(data[0].timeseries))
      .catch((error) => {
        console.log(error);
      });
    
  };
  
  
  const llenarTabla= () =>{
    console.log()
  }

  useEffect(() => {
    if (datos !== undefined) {
      setConfirmados(datos[0].confirmed);
      SetDeaths(datos[0].deaths);
      SetRecovered(datos[0].recovered);
    }
  }, [datos]);

  return (
    <div className="bodyCA">
      <div>
        <h1>Estadisticas a CentroAmericano sobre los casos de COVID-19</h1>
      </div>
      <div>
        <nav className="nav">
          <div>
            <button onClick={() => handlerPais("GT")}>Guatemala</button>
          </div>
          <div>
            <button type="submit" onClick={() => handlerPais("SV")}>
              El Salvador
            </button>
          </div>
          <div>
            <button onClick={() => handlerPais("HN")}>Honduras</button>
          </div>
          <div>
            <button onClick={() => handlerPais("NI")}>Nicaragua</button>
          </div>
          <div>
            <button onClick={() => handlerPais("CR")}>Costa Rica</button>
          </div>
          <div>
            <button onClick={() => handlerPais("PA")}>Panama</button>
          </div>
        </nav>
        <section className="sec">
          <div>
            <div className="cards">
              <div className="card">
                <div>
                  <img src={virus} alt="Logo" width="50px" height="50px" />
                </div>
                <div>
                  <p>Confirmados</p>
                </div>
                <div>{confirmados}</div>
              </div>
              <div className="card">
                <div>
                  <img src={death} alt="Logo" width="50px" height="50px" />
                </div>
                <div>
                  <p>Fallecidos</p>
                </div>
                <div>{deaths}</div>
              </div>
              <div className="card">
                <div>
                  <img src={recover} alt="Logo" width="50px" height="50px" />
                </div>
                <div>
                  <p>Recuperados</p>
                </div>
                <div>{recovered}</div>
              </div>
            </div>
          </div>
          {llenarTabla()}
          <div>
            <hr />
            <table>
              <thead>
                <tr>
                  <th>Confirmados</th>
                  <th>Fallecidos</th>
                  <th>Recuperados</th>
                  <th>Fecha</th>
                </tr>
              </thead>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CentroAmerica;
