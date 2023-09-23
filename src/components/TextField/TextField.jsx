import './TextField.css'

export const TextField = (props) => {

    const whenTyped = event => {
        props.setFieldValue(event.target.value);
    };

    return (
        <div>
            <label className='textField__label'>{props.fieldName}</label>
            <input className='textField__input' onChange={whenTyped} value={props.fieldValue} required={props.required} type={props.inputType} placeholder={props.placeholder} />
        </div>
    );
};
