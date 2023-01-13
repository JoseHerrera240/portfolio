import './SecondSection.scss';
import mokepon from '../../../Assets/Images/mokepon.png';
import melany from '../../../Assets/Images/melanny.png';
import store from '../../../Assets/Images/store.png';
import optiHelp from '../../../Assets/Images/optihelp.png';
import movies from '../../../Assets/Images/movies.png';
import todo from '../../../Assets/Images/todo.png';

export const SecondSection = () => {
    return (
        <div className='parent-second-section'>
        <h1>Mis últimos proyectos</h1>
        <p className='parragraph-mb'>Aquí puedes ver los últimos proyectos en los que he trabajé, unos con fines académicos y otros independientes.</p>
            <div>
                <section>
                    <img alt='svg' src={store} />
                    <a href='https://JoseHerrera240.github.io/products' target="_blank" rel="noopener noreferrer"><button className='display-button-image'>Visitar</button></a>
                </section>
                <section>
                    <img alt='svg' src={optiHelp} />
                    <a href='https://jorgeemherrera.github.io/optihelp/'target="_blank" rel="noopener noreferrer"><button className='display-button-image'>Visitar</button></a>
                </section>
                <section>
                    <img alt='svg' src={mokepon} style={{height: '139px'}} />
                    <a href='https://joseherrera240.github.io/'target="_blank" rel="noopener noreferrer"><button className='display-button-image'>Visitar</button></a>
                </section>
            </div>
            <div>
                <section>
                    <img alt='svg' src={movies} />
                    <a href='https://joseherrera240.github.io/movies/'target="_blank" rel="noopener noreferrer"><button className='display-button-image'>Visitar</button></a>
                </section>
                <section>
                    <img alt='svg' src={todo} style={{height: '145px' }}/>
                    <a href='https://joseherrera240.github.io/todo/'target="_blank" rel="noopener noreferrer"><button className='display-button-image'>Visitar</button></a>
                </section>
                <section>
                    <img alt='svg' src={melany} style={{height: '149px'}}/>
                    <a href='https://melanygrajales12.github.io/'target="_blank" rel="noopener noreferrer"><button className='display-button-image'>Visitar</button></a>
                </section>
            </div>
        </div>
    );
};