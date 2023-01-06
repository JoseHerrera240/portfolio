import './SecondSection.scss';
import svgExample from '../../../Assets/Images/exampleWork.png';
import store from '../../../Assets/Images/store.png';
import optiHelp from '../../../Assets/Images/optihelp.png';
import movies from '../../../Assets/Images/movies.png';
import food from '../../../Assets/Images/food.png';

export const SecondSection = () => {
    return (
        <div className='parent-second-section'>
        <h1>Mis ultimos proyectos</h1>
        <p className='parragraph-mb'>Aquí vas a ver mis ultimos proyectos.</p>
            <div>
                <section>
                    <img alt='svg' src={store} />
                    <button className='display-button-image'>Visitar</button>
                </section>
                <section>
                    <img alt='svg' src={optiHelp} />
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
                {/* <section>
                    <img alt='svg' src={svgExample} />
                    <button className='display-button-image'>Visitar</button>
                </section>
                <section>
                    <img alt='svg' src={svgExample} />
                    <button className='display-button-image'>Visitar</button>
                </section> */}
            </div>
        </div>
    );
};