import './Navbar.scss';

export const NavBar = () => {
    return (
        <div className="parent-nav-bar">
            <img src="https://img.icons8.com/windows/32/null/koala.png" alt='Icon' />
            <div className='modal-content'>
                    <div className='buttons-modals'>
                        <button><a  href='https://github.com/JoseHerrera240' target="_blank" rel="noopener noreferrer">GitHub</a></button>
                        <button><a href='https://www.linkedin.com/in/jos%C3%A9-david-herrera-largo-8a262b1b2/' target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                        <button><a href='https://wa.link/3umsci' target="_blank" rel="noopener noreferrer">WhatsApp</a></button>
                        <button><a href='https://drive.google.com/file/d/11SyuIslRDM5JuJtBvb6xGlhR5Nu9ToM4/view?usp=sharing' target="_blank" rel="noopener noreferrer">Curriculum vitae</a></button>
                    </div>
                </div>
        </div>
    );
}