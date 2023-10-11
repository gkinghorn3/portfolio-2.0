import './BaseBtn.styles.scss';

const BaseBtn = ({clickHandler, btnText, className}) => {

    return (
        <button onClick={clickHandler} className='header-cta' >{btnText}</button>

    )
}

export default BaseBtn; 