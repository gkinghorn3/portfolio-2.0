import './BaseBtn.styles.scss';

const BaseBtn = ({clickHandler, btnText}) => {

    return (
        <button onClick={clickHandler} className='base-btn'>{btnText}</button>

    )
}

export default BaseBtn; 