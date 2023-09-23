import './RegisterForm.css'
import SelectionList from '../SelectionList/SelectionList'
import { useState } from 'react'
import { TextField } from '../TextField/TextField'

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

                    <TextField inputType='text' fieldName='Nome' placeholder='Digite seu nome' required={true}
                        fieldValue={name} setFieldValue={setName}
                    />
                    <TextField inputType='text' fieldName='Cargo' placeholder='Digite seu cargo' required={true}
                        fieldValue={job} setFieldValue={setJob}
                    />
                    <TextField inputType='text' fieldName='Imagem' placeholder='Informe o endereço da imagem'
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


