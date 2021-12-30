import React, { useEffect, useState } from "react";
import Axios from 'axios';

import Loading from "./Components/Loading";
import Header from './Components/Header';
import CharactersList from './Components/CharactersList';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  
  const [info, setInfo] = useState({});
  const [Characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const url = "https://rickandmortyapi.com/api/character";
   
  const FetchUrl = (url) => {
    
    Axios.get(url)
    .then((response) => {
      setCharacters(response.data.results)
      setInfo(response.data.info)
      setLoading(false)
    })
  }

  const HandleNextPage = () => {
    FetchUrl(info.next);
      window.scrollTo(0, 0);
    };
  const HandlePreviousPage = () => {
    FetchUrl(info.prev)
      window.scrollTo(0,0);
    };
  useEffect(() => {
    FetchUrl(url);
  },[]);

  if (loading) { return <Loading/> }
    return (
 
      <div>
        <Header />       
          <div className="btn-top">
              <ul className="pagination justify-content-center">                
                  {info.prev ? ( <li className="page-item">
                    <button className="btn btn-warning" 
                      onClick={HandlePreviousPage}>
                      Anterior
                    </button>
                  </li>) : null}

                {info.next ? (
                  <li className="page-item">
                    <button className="btn btn-warning" onClick={HandleNextPage}>
                      Proxima
                    </button>
                </li>) : null}
              </ul>
          </div>
        <CharactersList List={Characters}/>
          <div className="btn-bottom">   
              <ul className="pagination justify-content-center btn-top">
                
                {info.prev ? ( <li className="page-item">      
                  <button className="btn btn-warning" 
                    onClick={HandlePreviousPage}>
                    Anterior
                  </button>
                </li>) : null}

                {info.next ? ( <li className="d-flex">
                  <button className="btn btn-warning btn-space" 
                    onClick={HandleNextPage}>
                    Proxima
                  </button>
                </li>) : null}

              </ul>
          </div>
        <About/>
        <Footer/>
      </div>
    )
}
export default App;
