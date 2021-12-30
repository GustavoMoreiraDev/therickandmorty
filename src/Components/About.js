const About = () => {
    return (
    
        <div id="about" className="session-about">
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-2">The Rick And Morty</h1>
                        <p className="highlight">
                            Criada por <em>Justin Roiland</em> e <em>Dan Harmon</em>, <strong>Rick And Morty</strong>  é uma série animada de comédia que mostra as aventuras interdimensionais de Rick, a mente mais brilhante da galáxia, e seu neto Morty.
                            Com sua arma capaz de criar portais para viajar no tempo-espaço, Rick leva Morty para explorar todos as absurdas formas de vida que o universo é capaz de sustentar. 
                            Entre momentos hilários e reflexões interessantes sobre a vida, <strong>Rick And Morty</strong> arranca gargalhadas e ainda rende ótimas discussões filosóficas.
                        </p>
                    </div>
                
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="img-about" src="https://geekcity.com.br/wp-content/uploads/2021/04/blob_u92y.1200.jpg" alt="Imagem"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;