import './RegisterForm.css'
import { FormFieldInput } from '../TextField/FormFieldInput'
import SelectionList from '../SelectionList/SelectionList'
import { useState } from 'react'
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

export const TeamRegisterForm = (props) => {

    const teams = props.teams

    const [name, setName] = useState('')
    const [mainColor, setMainColor] = useState('#000000')
    const [teamSelected, setTeam] = useState(teams[0])

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
        event.preventDefault();

        const teamToDelete = teams.find(team => team === teamSelected);
        if (teamToDelete) {
            props.deleteTeam(teamToDelete);
            const remainingTeams = teams.filter(team => team !== teamSelected);
            setTeam(remainingTeams[0]);
        } else {
            console.error(`Team not found: ${teamSelected}`);
        }
    }

    return (
        <section className="form">
            <form className='field' onSubmit={submitCreateForm}>

                <h3>Preencha os dados para criar o novo time.</h3>

                <FormFieldInput
                    fieldName='Nome do time'
                    placeholder='Digite o nome do time'
                    fieldValue={name}
                    setFieldValue={setName}
                    required
                />

                <FormFieldInput
                    inputType='color'
                    fieldName='Cor principal do time (editável)'
                    fieldValue={mainColor || '#000000'} // if mainColor is an empty string, use black as a default
                    setFieldValue={setMainColor}
                />

                <input className='submitBtn' type="submit" value='Criar time' />
            </form>
            <hr />
            <form className='field' onSubmit={submitDeleteForm}>

                <h3>Escolha o time que deseja excluir</h3>

                <SelectionList
                    fieldName='Times'
                    list={teams} required
                    fieldValue={teamSelected}
                    setFieldValue={setTeam}
                />

                <input className='deleteBtn' type="submit" value='Excluir time' />

            </form>
        </section>
    )
} 