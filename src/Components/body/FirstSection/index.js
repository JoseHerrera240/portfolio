import './FirstSection.scss';
// import avatar from '../../../Assets/Images/Captura de pantalla_20221121_100011.png';
// import avatar from '../../../Assets/Images/avatar.png';
export const FirstSection = () => {
    return (
        <div className='parent-first-section'>
            <p className='first-tittle'>
                Desarrollador FrontEnd junior
                <span>Soy un Desarrollador FrontEnd, con experiencias en algunas lenguajes y con muchas ganas de aprender</span>  
            </p>
            {/* <img src={avatar} alt='avatar' width='178px'/> */}
        </div>
    );
};