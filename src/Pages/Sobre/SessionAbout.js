import React, { useEffect, useState } from "react";
import Axios  from "axios";

import Loading from '../../Loading';
import CharactersList from './CharactersList';
import About from './About';

const SessionAbout = () => {
               
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
            <div className="btn-top">
                <ul className="pagination justify-content-center">                
                    {info.prev ? ( <li className="page-item">
                        <button className="btn btn-warning"onClick={HandlePreviousPage}>
                            Anterior
                        </button>
                    </li>) : null}

                    {info.next ? (<li className="page-item">
                        <button className="btn btn-warning"onClick={HandleNextPage }>
                            Proxima
                        </button>
                    </li>) : null}
                </ul>
            </div>
            <CharactersList List={Characters}/>
            <div className="btn-top">
                <ul className="pagination justify-content-center">                
                    {info.prev ? ( <li className="page-item">
                        <button className="btn btn-warning"onClick={HandlePreviousPage}>
                            Anterior
                        </button>
                    </li>) : null}

                    {info.next ? (<li className="page-item">
                        <button className="btn btn-warning"onClick={HandleNextPage }>
                            Proxima
                        </button>
                    </li>) : null}
                </ul>
            </div>
            <About />
        </div>
    )
}

export default SessionAbout;