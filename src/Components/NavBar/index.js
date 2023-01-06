import './Navbar.scss';
import zorro from '../../Assets/Images/zorro.png';
import hv from '../../Assets/Images/cv.png';
import github from '../../Assets/Images/github.png';
import whatsApp from '../../Assets/Images/whatsapp.png';
import linkedin from '../../Assets/Images/linkedin.png';

export const NavBar = () => {
    return (
        <div className="parent-nav-bar">
            <img src={zorro} alt='Icon' width='45px'/>
            <div className='modal-content'>
                    <div className='buttons-modals'>
                        <a  href='https://github.com/JoseHerrera240' target="_blank" rel="noopener noreferrer"><img src={github} width='45px' alt='github'/></a>
                        <a href='https://www.linkedin.com/in/jos%C3%A9-david-herrera-largo-8a262b1b2/' target="_blank" rel="noopener noreferrer"><img src={linkedin} width='45px' alt='linkedin'/></a>
                        <a href='https://wa.link/3umsci' target="_blank" rel="noopener noreferrer"><img src={whatsApp} width='45px' alt='whatsApp'/></a>
                        <a href='https://drive.google.com/file/d/11SyuIslRDM5JuJtBvb6xGlhR5Nu9ToM4/view?usp=sharing' target="_blank" rel="noopener noreferrer"><img src={hv} width='45px' alt='Curriculum'/></a>
                    </div>
                </div>
        </div>
    );
}