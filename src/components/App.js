import React from 'react'
import '../styles/App.css';
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

  const timeCheck = i => {
    return (i<10) ? '0'+i : i;
  }

  // console.log(new Date().toLocaleTimeString('en-US', {hour12: false}))

  const [alarms, setAlarms] = React.useState(defaultAlarms)

  const [open, setOpen] = React.useState(false)
  const date1 = new Date()
  const [currentTime, setCurrentTime] = React.useState(timeCheck(date1.getHours())+":"+timeCheck(date1.getMinutes()))

  const updateTime = () => {
    const date = new Date()
    setCurrentTime(timeCheck(date.getHours())+":"+timeCheck(date.getMinutes()))
    console.log(currentTime)
  }
  React.useEffect(()=> {
    updateTime()
  }, [])

  setInterval(updateTime, 60000)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (label, alarmTime) => {
    const alarmsCopy = [...alarms]
    alarmsCopy.push({label, alarmTime})
    setAlarms(alarmsCopy)
    handleClose()
  }

  const handleDelete = (index) => {
    const alarmsCopy = [...alarms]
    alarmsCopy.splice(index, 1)
    setAlarms(alarmsCopy)
  }

  const handleEdit = (label1, alarmTime1, index) => {
    const alarmsCopy = [...alarms]
    alarmsCopy[index].label = label1
    alarmsCopy[index].alarmTime = alarmTime1
    setAlarms(alarmsCopy)
  }

  const handleSnooze = index => {
    const alarmsCopy = [...alarms]
    const date = new Date(Date.now() + 10*60*1000)
    alarmsCopy[index].alarmTime = timeCheck(date.getHours()) + ':' + timeCheck(date.getMinutes())
    console.log(alarmsCopy[index])
    setAlarms(alarmsCopy)
  }

  return (
    <div id="main">
      <AlarmContainer onOpen={handleClickOpen} alarms={alarms} onDelete={handleDelete} onEdit={handleEdit} time={currentTime} onSnooze={handleSnooze}/>
      <AlarmForm open={open} onOpen={handleClickOpen} onClose={handleClose} onSave={handleSave}/>
    </div>
  )
}


export default App;
