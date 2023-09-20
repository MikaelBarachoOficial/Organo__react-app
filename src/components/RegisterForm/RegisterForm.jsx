import './RegisterForm.css'
import SelectionList from '../SelectionList/SelectionList'
import { useState } from 'react'

export const RegisterForm = (props) => {

    const teams = props.teams

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState(teams[0])

    const submitForm = event => {
        event.preventDefault()

        const collaborator = {
            name,
            job,
            image,
            team
        }

        props.addNewCollaborator(collaborator)
        
    }

    return (
        <section className="form">
            <form className='field' onSubmit={submitForm}>
                <h3>Preencha os dados para criar o card do colaborador.</h3>

                <Field inputType='text' fieldName='Nome' placeholder='Digite seu nome' required={true}
                    fieldValue={name} setFieldValue={setName}
                />
                <Field inputType='text' fieldName='Cargo' placeholder='Digite seu cargo' required={true}
                    fieldValue={job} setFieldValue={setJob}
                />
                <Field inputType='text' fieldName='Imagem' placeholder='Informe o endereço da imagem'
                    fieldValue={image} setFieldValue={setImage}
                />
                
                <SelectionList fieldName='Times' list={teams} required={true}
                    fieldValue={team} setFieldValue={setTeam}
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
