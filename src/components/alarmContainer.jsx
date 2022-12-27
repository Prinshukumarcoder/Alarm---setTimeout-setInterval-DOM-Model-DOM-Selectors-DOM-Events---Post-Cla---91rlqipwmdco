import React from "react";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import "../styles/App.css";
import Alarm from "./alarm";

export default function AlarmContainer(props) {
  const alarms = [
    {
        label: "Interview at abc", 
        alarmTime: new Date(Date.now() + 30*60*1000)
    },
    {
        label: "Interview at xyz", 
        alarmTime: new Date(Date.now() + 100*60*1000)
    },
    {
        label: "Interview at pqr", 
        alarmTime: new Date(Date.now() + 200*60*1000)
    },
]

const handleEdit = (label, alarmTime, index) => {
    // console.log("hello")
    props.onEdit(label, alarmTime, index)
}
    return (
        <>
        <Fab color="primary" aria-label="add" onClick={props.onOpen} id="add-new">
            <Add />
          </Fab>
          <div id="alarms">
          {props.alarms.length === 0 ? "No alarms found" : props.alarms.map((alarm, index) => (
            <Alarm key={alarm.label} label={alarm.label} alarmTime={alarm.alarmTime} onDelete={()=> props.onDelete(index)} time={props.time} onEdit={(label1, alarmTime1)=>handleEdit(label1, alarmTime1, index)} index={index} onSnooze={() => props.onSnooze(index)}/>
          ))}
          </div>
        </>
    )
}
