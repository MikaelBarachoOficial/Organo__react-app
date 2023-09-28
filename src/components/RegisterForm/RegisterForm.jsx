import './RegisterForm.css'
import { FormFieldInput } from '../TextField/FormFieldInput'
import SelectionList from '../SelectionList/SelectionList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const RegisterForm = (props) => {

    const teams = props.teams

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState(teams[0])

    const submitForm = event => {
        event.preventDefault()

        const collaborator = {
            id: uuidv4(),
            name,
            job,
            image,
            team
        }

        setName('')
        setJob('')
        setImage('')
        setTeam(teams[0])

        props.addNewCollaborator(collaborator)

    }

    return (
        <section className="form">
            <form className='field' onSubmit={submitForm}>
                <h3>Preencha os dados para criar o card do colaborador.</h3>

                <FormFieldInput
                    fieldName='Nome'
                    placeholder='Digite seu nome'
                    fieldValue={name}
                    setFieldValue={setName}
                    required
                />

                <FormFieldInput
                    fieldName='Cargo'
                    placeholder='Digite seu cargo'
                    fieldValue={job}
                    setFieldValue={setJob}
                    required
                />

                <FormFieldInput
                    fieldName='Imagem'
                    placeholder='Informe o endereço da imagem'
                    fieldValue={image}
                    setFieldValue={setImage}
                />

                <SelectionList
                    fieldName='Times'
                    list={teams}
                    fieldValue={team}
                    setFieldValue={setTeam}
                    required
                />

                <input className='submitBtn' type="submit" value='Criar card' />
            </form>
        </section>
    )
}


