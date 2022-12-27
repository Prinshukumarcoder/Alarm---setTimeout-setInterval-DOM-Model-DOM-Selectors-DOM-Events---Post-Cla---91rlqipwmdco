import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import '../styles/App.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlarmEditForm(props) {
  
    const [label, setLabel] = React.useState(props.label);
    const [alarmTime, setAlarmTime] = React.useState(props.alarmTime);
    return (
        <>
        <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit alarm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Box display="flex" flexDirection='column'>
          <TextField id={props.alarmid + '-label'} label="Alarm Label" variant="outlined" value={label} onChange={(event) => setLabel(event.target.value)}/>
          <TextField
            label="Alarm clock"
            type="time"
            value={alarmTime}
            id = {props.alarmid + '-time'}
            onChange={(event)=> setAlarmTime(event.target.value)}
            inputProps={{
                step: 300
            }}
          />
          </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" id={props.alarmid + '-save'} color="primary" onClick={() => props.onEdit(label, alarmTime)}>
            Save
        </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
