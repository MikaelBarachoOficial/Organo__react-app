import './RegisterForm.css'
import { TextField } from '../TextField/TextField'
import SelectionList from '../SelectionList/SelectionList'
import { useState } from 'react'
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

export const TeamRegisterForm = (props) => {

    const teams = props.teams

    const [name, setName] = useState('')
    const [mainColor, setMainColor] = useState('#000000')
    const [team, setTeam] = useState(teams[0])

    const submitCreateForm = event => {
        event.preventDefault()

        const newTeam = {
            id: uuidv4(),
            name,
            mainColor,
            backgroundColor: hexToRgba(mainColor, '0.5')
        }

        setName('')
        setMainColor('')

        props.addNewTeam(newTeam)
        
    }

    const submitDeleteForm = event => {
        event.preventDefault()

        props.deleteTeam(team)
        
        setTeam(teams[0])

    }

    return (
            <section className="form">
                <form className='field' onSubmit={submitCreateForm}>

                    <h3>Preencha os dados para criar o novo time.</h3>

                    <TextField inputType='text' fieldName='Nome do time' placeholder='Digite o nome do time' required={true}
                        fieldValue={name} setFieldValue={setName} inputClass='textField__input-text'
                    />
                    
                    <TextField inputType='color' fieldName='Cor principal do time (editável)'
                        fieldValue={mainColor} setFieldValue={setMainColor} inputClass='textField__input-color'
                    />

                    <input className='submitBtn' type="submit" value='Criar time' />
                </form>
                <hr />
                <form className='field' onSubmit={submitDeleteForm}>

                    <h3>Escolha o time que deseja excluir</h3>

                    <SelectionList fieldName='Times' list={teams} required={true}
                        fieldValue={team} setFieldValue={setTeam}
                    />

                    <input className='deleteBtn' type="submit" value='Excluir time' />

                </form>
            </section>
    )
} 