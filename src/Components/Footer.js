import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'

const Footer = () => {
  return (  
    <div id="contact" className="container session-footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
            <p className="col-md-4 mb-0">&copy;Rick And Morty</p>
            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
            </a>

            <ul class="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2">< FaHome /></a></li>
                <li className="nav-item"><a href="https://www.instagram.com/gust4_s4ntos/" target="_blank" className="nav-link px-2"><FaInstagram/></a></li>
                <li className="nav-item"><a href="https://github.com/GustavoMoreiraDev" target="_blank" className="nav-link px-2"><FaGithub /></a></li>
                <li className="nav-item"><a href="https://www.facebook.com/gustavo.moreiramoreira.33633/" target="_blank" className="nav-link px-2"><FaFacebookF/></a></li>
            </ul>
                
        </footer>
    </div>
  )
}

export default Footer