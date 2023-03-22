import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabsComponent() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
        <Tab label="Property Details" {...a11yProps(0)} />
        <Tab label="Features & Amenities" {...a11yProps(1)} />
        <Tab label="Media and Gallery" {...a11yProps(2)} />
        <Tab label="Maintenances" {...a11yProps(3)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
    <TabPanel value={value} index={3}>
      Maintenances
    </TabPanel>
  </Box>
  );
}