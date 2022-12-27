import React from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Edit, Delete } from "@mui/icons-material";
import ActiveAlarm from "./activeAlarm";
import AlarmEditForm from "./alarmEdit";

export default function Alarm(props) {

    const [open, setOpen] = React.useState(false)
    const [editOpen, setEditOpen] = React.useState(false)

    const checkAlarm = () => {
        if(props.time == props.alarmTime){
            setOpen(true)
        }    
    }

    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(()=> {
        checkAlarm()
    }, [])

    const handleEdit = (label1, alarmTime1) => {
        setEditOpen(false)
        props.onEdit(label1, alarmTime1)
    }
    const handleSnooze = () => {
        props.onSnooze()
        handleClose()
    }
    
    const handleDelete = () => {
        props.onDelete()
        handleClose()
    }

    setInterval(checkAlarm, 60000)

    return (
        <>
        <ActiveAlarm key = {props.key} open={open} label = {props.label} alarmTime={props.alarmTime} onClose={handleClose} onSnooze={handleSnooze} onDelete={handleDelete}/>
            <Paper elevation={3} >
            <Box display='flex' flexDirection='row' justifyContent="space-between">
                <Typography variant="h6">{props.label}</Typography>
                <Typography variant="h6">{props.alarmTime}</Typography>
                <Box>
                    <IconButton area-label="delete">
                    <Edit id = {props.index+'-edit'} onClick={()=> setEditOpen(true)}/>
                    <AlarmEditForm open={editOpen} alarmid= {props.index} label={props.label} alarmTime={props.alarmTime} index={props.index} onEdit={handleEdit} />
                    </IconButton>
                    <IconButton area-label="delete">
                    <Delete id={props.index} onClick={props.onDelete}/>
                    </IconButton>
                </Box>
            </Box>
            </Paper>
            
            {/* {props.time == props.alarmTime ? <ActiveAlarm open={true} label={props.label} alarmTime={props.alarmTime} /> : <ActiveAlarm open={false} label={props.label} alarmTime={props.alarmTime} />} */}
        </>
    )
}
