
import './Header.styles.scss';

const Header = () => {
    return (
        <div className='header-container'>  
            <div className='text-content'>
            <h1>Grant Kinghorn</h1>
            <h2>Fullstack Web Developer</h2>


            </div> 
            <div className='headshot-container'>
                <img src='/images/profile-pic.png' alt='Grant Kinghorn' className='header-image' />
            </div>
            
        </div>
    )
};

export default Header;