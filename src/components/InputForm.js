import React, {useState} from 'react';
import '../css/inputStyle.css';

const InputForm = ({id, label, nome, tipo, value, onChange}) => {
    const [val, setVal] = useState('');

    function onKey(e) {
        setVal(e.target.value);
      }

    return(
    <div className="input-container mb-4">
      <input type={tipo} name={nome}  value={value} onKeyUpCapture={onKey} onChange={onChange} />
      <label className={val && 'filled'} htmlFor={nome} >
        {label}
      </label>
    </div>

    );
}

export default InputForm