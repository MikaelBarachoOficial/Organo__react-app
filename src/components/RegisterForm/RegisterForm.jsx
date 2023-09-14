import './RegisterForm.css'
import SelectionList from '../SelectionList/SelectionList'
import { useState } from 'react'

export const RegisterForm = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [userName, setUserName] = useState('')
    const [userJob, setUserJob] = useState('')
    const [userImage, setUserImage] = useState('')
    const [userTeam, setUserTeam] = useState(teams[0])

    const submitForm = event => {
        event.preventDefault()
        console.log(userName, userJob, userImage, userTeam)
        
    }

    return (
        <section className="form">
            <form className='field' onSubmit={submitForm}>
                <h3>Preencha os dados para criar o card do colaborador.</h3>

                <Field inputType='text' fieldName='Nome' placeholder='Digite seu nome' required={true}
                    fieldValue={userName} setFieldValue={setUserName}
                />
                <Field inputType='text' fieldName='Cargo' placeholder='Digite seu cargo' required={true}
                    fieldValue={userJob} setFieldValue={setUserJob}
                />
                <Field inputType='text' fieldName='Imagem' placeholder='Informe o endereço da imagem'
                    fieldValue={userImage} setFieldValue={setUserImage}
                />
                
                <SelectionList fieldName='Times' list={teams} required={true}
                    fieldValue={userTeam} setFieldValue={setUserTeam}
                />

                <input className='submitBtn' type="submit" value='Criar card' />
            </form>
        </section>
    )
}

const Field = (props) => {

    const whenTyped = event => {
        props.setFieldValue(event.target.value)
    }

    return (
        <div>
            <label>{props.fieldName}</label>
            <input onChange={whenTyped} value={props.fieldValue} required={props.required} type={props.inputType} placeholder={props.placeholder} />
        </div>
    )
}
