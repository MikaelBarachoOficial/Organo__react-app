import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';
import Banner from './components/Banner';
import { RegisterForm, TeamRegisterForm } from './components/RegisterForm';
import { Team, NoTeam } from './components/Teams';
import Footer from './components/Footer';
import TabsField from './components/TabsField/TabsField';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      mainColor: '#57C278',
      backgroundColor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      mainColor: '#82CFFA',
      backgroundColor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      mainColor: '#A6D157',
      backgroundColor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      mainColor: '#E06B69',
      backgroundColor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      mainColor: '#DB6EBF',
      backgroundColor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      mainColor: '#FFBA05',
      backgroundColor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      mainColor: '#FF8A29',
      backgroundColor: '#FFEEDF'
    }
  ])

  const changeTeamColor = (id, mainColor, backgroundColor, switchColorMode) => {
    setTeams(
      teams.map(team =>
        team.id === id ? {
          ...team,
          mainColor: mainColor ? mainColor : team.mainColor,
          backgroundColor: !switchColorMode && mainColor ? hexToRgba(mainColor, '0.5') : backgroundColor ? backgroundColor : team.backgroundColor
        } : team
      )
    )
  }

  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      name: 'Mikael Baracho',
      job: 'Desenvolvedor React',
      image: 'https://github.com/MikaelBarachoOficial.png',
      team: 'Programação'
    },
    {
      id: uuidv4(),
      name: 'Andressa Sales',
      job: 'Desenvolvedora Front-End, React.js',
      image: 'https://github.com/AndressaSales.png',
      team: 'Front-End'
    },
    {
      id: uuidv4(),
      name: 'Mikael Baracho',
      job: 'Exterminador de Bugs Master Blaster',
      image: 'https://github.com/MikaelBarachoOficial.png',
      team: 'Front-End'
    }
  ])

  const onRegistered = (collaborator, team) => {
    collaborator && setCollaborators([...collaborators, collaborator])
    team && setTeams([...teams, team])
  }

  const onDeleteTeam = (teamDeleted) => {
    setTeams(teams.filter(team => team.name !== teamDeleted))
    setCollaborators(collaborators.filter(collaborator => collaborator.team !== teamDeleted))
  }

  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (value) => {
    setTabValue(value)
  }

  const toDeleteCollaborator = (id) => {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  return (
    <div className="App">
      <Banner />

      <TabsField tabChanged={tabValue => handleTabChange(tabValue)} />

      {tabValue === 0 && <RegisterForm
        addNewCollaborator={collaborator => onRegistered(collaborator)}
        teams={teams.map(team => team.name)}
      />}

      {tabValue === 1 && <TeamRegisterForm
        addNewTeam={team => onRegistered(undefined, team)}
        teams={teams.map(team => team.name)}
        deleteTeam={team => onDeleteTeam(team)}
      />}

      {teams.map((team, index) =>
        <Team
          key={index}
          team={team}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          toDeleteCollaborator={toDeleteCollaborator}
          onChangeTeamColor={changeTeamColor}
        />
      )}

      {collaborators < 1 && <NoTeam />}

      <Footer />
    </div>
  )
}

export default App;
