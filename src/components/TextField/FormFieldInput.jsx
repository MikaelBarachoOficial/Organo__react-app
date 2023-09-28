import './FormFieldInput.css'

export const FormFieldInput = ({ inputType = 'text', inputClass = 'textField__input-text', ...props }) => {

    const whenTyped = event => {
        props.setFieldValue(event.target.value);
    };

    return (
        <div>
            
            <label className='textField__label'>{props.fieldName}</label>

            <input
                className={inputClass}
                onChange={whenTyped}
                value={props.fieldValue}
                required={props.required}
                type={inputType}
                placeholder={props.placeholder}
            />

        </div>
    );
};
