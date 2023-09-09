import './RegisterForm.css'

export const RegisterForm = () => {
    return (
        <section className="form">
            <form className='field'>
                <h3>Preencha os dados para criar o card do colaborador.</h3>

                <Field inputType='text' fieldName='Nome' placeholder='Digite seu nome' />
                <Field inputType='text' fieldName='Cargo' placeholder='Digite seu cargo' />
                <Field inputType='text' fieldName='Imagem' placeholder='Informe o endereço da imagem' />

                <input className='submitBtn' type="submit" value='Criar card'/>
            </form>
        </section>
    )
}

const Field = (props) => {
    return(
        <div>
            <label>{props.fieldName}</label>
            <input type={props.inputType} placeholder={props.placeholder} />
        </div>
    )
}
