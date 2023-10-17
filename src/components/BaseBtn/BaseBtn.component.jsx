import './BaseBtn.styles.scss';

const BaseBtn = ({clickHandler, btnText, className, type}) => {

    return (
        <button onClick={clickHandler} className={className} type={type}>{btnText}</button>

    )
}

export default BaseBtn; 