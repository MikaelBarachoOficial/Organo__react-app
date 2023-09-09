import './RegisterForm.css'
import SelectionList from '../SelectionList/SelectionList'

export const RegisterForm = () => {

    let teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const submitForm = event => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <section className="form">
            <form className='field' onSubmit={submitForm}>
                <h3>Preencha os dados para criar o card do colaborador.</h3>

                <Field inputType='text' fieldName='Nome' placeholder='Digite seu nome' required={true} />
                <Field inputType='text' fieldName='Cargo' placeholder='Digite seu cargo' required={true} />
                <Field inputType='text' fieldName='Imagem' placeholder='Informe o endereço da imagem' />
                
                <SelectionList fieldName='Times' list={teams} required={true}/>

                <input className='submitBtn' type="submit" value='Criar card' />
            </form>
        </section>
    )
}

const Field = (props) => {
    return (
        <div>
            <label>{props.fieldName}</label>
            <input required={props.required} type={props.inputType} placeholder={props.placeholder} />
        </div>
    )
}
