import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Video from "../PlayerVideo/PlayerVideo";
import Carousel from '../ComponentsSearch/Carousel';


const Episodios = () => {
    
    return (
        <>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="container-sm">
                        <Video/>
                    </div>
                </div>
            </div>
            
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <Carousel />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Assista agora The Rick And Morty</h1>
                        
                        <p className="lead">
                            Acompanhe malucas viagens no tempo-espaço e por universos 
                            paralelos com <strong>Rick</strong>, um cientista com problemas 
                            com a bebida, e seu neto <strong>Morty</strong>, um adolescente 
                            não tão brilhante quanto o avô.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Episodios;