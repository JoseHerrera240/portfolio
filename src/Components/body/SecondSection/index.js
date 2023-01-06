import './SecondSection.scss';
import mokepon from '../../../Assets/Images/mokepon.png';
import melany from '../../../Assets/Images/melanny.png';
import store from '../../../Assets/Images/store.png';
import optiHelp from '../../../Assets/Images/optihelp.png';
import movies from '../../../Assets/Images/movies.png';
import food from '../../../Assets/Images/food.png';

export const SecondSection = () => {
    return (
        <div className='parent-second-section'>
        <h1>Mis ultimos proyectos</h1>
        <p className='parragraph-mb'>Aquí puedes ver los ultimos proyectos en los que he trabajado, ya sea por estudio o independientes.</p>
            <div>
                <section>
                    <img alt='svg' src={store} />
                    <button className='display-button-image'>Visitar</button>
                </section>
                <section>
                    <img alt='svg' src={optiHelp} />
                    <button className='display-button-image'>Visitar</button>
                </section>
                <section>
                    <img alt='svg' src={mokepon} style={{height: '139px'}} />
                    <button className='display-button-image'>Visitar</button>
                </section>
            </div>
            <div>
                <section>
                    <img alt='svg' src={movies} />
                    <button className='display-button-image'>Visitar</button>
                </section>
                <section>
                    <img alt='svg' src={food} />
                    <button className='display-button-image'>Visitar</button>
                </section>
                <section>
                    <img alt='svg' src={melany} style={{height: '149px'}}/>
                    <button className='display-button-image'>Visitar</button>
                </section>
            </div>
        </div>
    );
};