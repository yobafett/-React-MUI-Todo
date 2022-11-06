import { useState, useRef } from 'react';
import classNames from 'classnames';

import './IntemInput.scss';
import addIcon from '../../assets/icons/add.svg';

const ItemInput = (props) => {
    const [inputIsFocus, setInputIsFocus] = useState(false);
    const inputEl = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        props.addNote(inputEl.current.value);
        inputEl.current.value = '';
    }

    const formClasses = classNames('note-input', {
        'active': inputIsFocus
    });

    return (
        <form className={formClasses} onSubmit={submitHandler}>
            <input ref={inputEl} type="text"
                onFocus={() => setInputIsFocus(true)}
                onBlur={() => setInputIsFocus(false)} />
            <button type="submit">
                <img src={addIcon} alt="Add" />
            </button>
        </form>
    );
}

export default ItemInput;