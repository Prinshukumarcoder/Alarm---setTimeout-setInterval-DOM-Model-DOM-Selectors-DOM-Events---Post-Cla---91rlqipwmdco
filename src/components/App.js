import { Co2Sharp } from '@mui/icons-material';
import React from 'react'
import '../styles/App.css';
import ActiveAlarm from './activeAlarm';
import AlarmContainer from './alarmContainer';
import AlarmForm from './alarmForm';
const App = () => {

  const defaultAlarms = [
    {
        label: "Interview at abc", 
        alarmTime: "08:30"
    },
    {
        label: "Interview at xyz", 
        alarmTime: "19:30"
    },
    {
        label: "Interview at pqr", 
        alarmTime: "20:45"
    },
  ]

  return (
    <div id="main">
    </div>
  )
}


export default App;
