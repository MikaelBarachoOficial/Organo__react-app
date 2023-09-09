const SelectionList = (props) => {

    let list = props.list

    return (
        <div className="selection-list">
            <label>{props.fieldName}</label>
            <select required={props.required}>
                {/* <option hidden disabled selected > -- Selecione uma opção -- </option> */}
                { list.map(item => <option key={item}>{item}</option>) }
            </select>
        </div>
    )
}

export default SelectionList