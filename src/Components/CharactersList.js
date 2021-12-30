import React from "react";

const CharactersList = ({List}) => {

    return(
        
        <section className="session-characters">  
          <div className="album py-5">  
            <div className="container row">      
              {List.map((item, index) => (
                <div key={index} className="main-session col-xl-3">
                  <div className="col">
                    <div className="card shadow-sm">  
                        <div>
                          <img className="card-img-top" src={item.image} alt="Imagem"/>
                        </div>

                        <div className="card-body">
                          <h5>{item.name}</h5>
                          <p className="highlight">{item.location.name}</p>

                          <div className="d-flex justify-content-between align-items-center">
                              <button className="btn btn-session">{item.status}</button>
                              <small className="text-muted">{item.species}</small>
                          </div>
                        </div>   
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
)}
export default CharactersList;
