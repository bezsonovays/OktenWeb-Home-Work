
import './ButtonDelete.css';

export function ButtonDelete(props) {
    return (
        <div className="card__button" onClick={props.onClick}>
            <button>Delete</button>
        </div>
    );
}

export default ButtonDelete;
