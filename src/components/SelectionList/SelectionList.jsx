import './SelectionList.css'

const SelectionList = (props) => {

    const list = props.list

    const whenChanged = event => {
        props.setFieldValue(event.target.value)
    }

    return (
        <div className="selection-list">
            <label>{props.fieldName}</label>
            <select onChange={whenChanged} value={props.fieldValue} required={props.required}>
                {/* <option hidden disabled selected > -- Selecione uma opção -- </option> */}
                { list.map((item, index) => <option key={index}>{item}</option>) }
            </select>
        </div>
    )
}

export default SelectionList