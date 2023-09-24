import { useState } from 'react';
import Banner from './components/Banner';
import RegisterForm from './components/RegisterForm';
import Team from './components/Teams'
import Footer from './components/Footer';
import TabsField from './components/TabsField/TabsField';

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      mainColor: '#57C278',
      backgroundColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      mainColor: '#82CFFA',
      backgroundColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      mainColor: '#A6D157',
      backgroundColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      mainColor: '#E06B69',
      backgroundColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      mainColor: '#DB6EBF',
      backgroundColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      mainColor: '#FFBA05',
      backgroundColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      mainColor: '#FF8A29',
      backgroundColor: '#FFEEDF'
    }
  ])

  const [collaborators, setCollaborators] = 
  useState([
    {
      name: 'Mikael Baracho',
      job: 'Desenvolvedor React',
      image: 'https://github.com/MikaelBarachoOficial.png',
      team: 'Programação'
    },
    {
      name: 'Andressa Sales',
      job: 'Desenvolvedora Front-End, React.js',
      image: 'https://github.com/AndressaSales.png',
      team: 'Front-End'
    },
    {
      name: 'Mikael Baracho',
      job: 'Exterminador de Bugs Master Blaster',
      image: 'https://github.com/MikaelBarachoOficial.png',
      team: 'Front-End'
    }
  ])

  const onCollaboratorRegistered = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (value) => {
    setTabValue(value)
    console.log(value)
  }

  const toDelete = () => {
    console.log('deleting collaborator')
  }

  return (
    <div className="App">
      <Banner />

      <TabsField tabChanged={tabValue => handleTabChange(tabValue)} />

      {tabValue === 0 && <RegisterForm addNewCollaborator={collaborator => onCollaboratorRegistered(collaborator)} teams={teams.map(team => team.name)} />}

      { teams.map((team, index) =>
        
        <Team 
        key={index} 
        team={team} 
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        toDelete={toDelete}
        />
      )}

      <Footer />
    </div>
  )
}

export default App;
