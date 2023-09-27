import './RegisterForm.css'
import { TextField } from '../TextField/TextField'
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

                    <TextField inputType='text' fieldName='Nome' placeholder='Digite seu nome' required={true}
                        fieldValue={name} setFieldValue={setName} inputClass='textField__input-text'
                    />
                    <TextField inputType='text' fieldName='Cargo' placeholder='Digite seu cargo' required={true}
                        fieldValue={job} setFieldValue={setJob} inputClass='textField__input-text'
                    />
                    <TextField inputType='text' fieldName='Imagem' placeholder='Informe o endereço da imagem'
                        fieldValue={image} setFieldValue={setImage} inputClass='textField__input-text'
                    />
                    
                    <SelectionList fieldName='Times' list={teams} required={true}
                        fieldValue={team} setFieldValue={setTeam}
                    />

                    <input className='submitBtn' type="submit" value='Criar card' />
                </form>
            </section>
    )
}


