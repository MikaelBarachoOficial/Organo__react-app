import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './TabsField.css'

const TabsField = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.tabChanged(newValue)
  };

  const tabs = ['Criar Colaborador', 'Criar Time']

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>

       {tabs.map(tab => <Tab style={{ fontSize: '1rem' }} label={tab} key={tab}/>)}
       
      </Tabs>
    </Box>
  );
}

export default TabsField