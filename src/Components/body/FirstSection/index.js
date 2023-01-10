import './FirstSection.scss';
import react from '../../../Assets/Images/react.png';
import api from '../../../Assets/Images/api.png';
import mysql from '../../../Assets/Images/mysql.png';
import bootstrap from '../../../Assets/Images/bootstrap.png';
import sass from '../../../Assets/Images/sass.png';
import css3 from '../../../Assets/Images/css-3.png';
import html5 from '../../../Assets/Images/html-5.png';
import git from '../../../Assets/Images/git.png';
import graphql from '../../../Assets/Images/graphql.png';
import js from '../../../Assets/Images/js.png';
// import avatar from '../../../Assets/Images/Captura de pantalla_20221121_100011.png';
// import avatar from '../../../Assets/Images/avatar.png';
export const FirstSection = () => {
    return (
        <div className='parent-first-section'>
            <p className='first-tittle'>
                Desarrollador front-end junior
                <span>Soy un desarrollador front-end, con experiencias freelance y estudiante del Cesde. Tengo experiencia en las siguientes herramientas:</span>
            </p>
            <div className='icons'>
                <a href='https://es.reactjs.org/' target="_blank" rel="noopener noreferrer"><img src={react} alt='react' width='50px' /></a>
                <a href='https://developer.mozilla.org/es/docs/Web/CSS' target="_blank" rel="noopener noreferrer"><img src={css3} alt='css3' width='50px' /></a>
                <a href='https://www.javascript.com/' target="_blank" rel="noopener noreferrer"><img src={js} alt='js' width='50px' /></a>
                <a href='https://lenguajehtml.com/html/' target="_blank" rel="noopener noreferrer"><img src={html5} alt='html5' width='50px' /></a>
                <a href='https://aws.amazon.com/es/what-is/api/' target="_blank" rel="noopener noreferrer"><img src={api} alt='api' width='50px' /></a>
                <a href='https://www.mysql.com/' target="_blank" rel="noopener noreferrer"><img src={mysql} alt='mysql' width='50px' /></a>
                <a href='https://getbootstrap.com/' target="_blank" rel="noopener noreferrer"><img src={bootstrap} alt='bootstrap' width='50px' /></a>
                <a href='https://sass-lang.com/' target="_blank" rel="noopener noreferrer"><img src={sass} alt='sass' width='50px' /></a>
                <a href='https://git-scm.com/' target="_blank" rel="noopener noreferrer"><img src={git} alt='git' width='50px' /></a>
                <a href='https://graphql.org/' target="_blank" rel="noopener noreferrer"><img src={graphql} alt='graphql' width='50px' /></a>
            </div>
        </div>
    );
};