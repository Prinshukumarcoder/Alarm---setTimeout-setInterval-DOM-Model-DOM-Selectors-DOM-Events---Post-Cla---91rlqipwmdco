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

export default function AlarmForm(props) {
  
    const [label, setLabel] = React.useState("");
    const [alarmTime, setAlarmTime] = React.useState("07:30");
    return (
        <>
        <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add an alarm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Box display="flex" flexDirection='column'>
          <TextField id="label" label="Alarm Label" variant="outlined" value={label} onChange={(event) => setLabel(event.target.value)}/>
          <TextField
            id="add-time"
            label="Alarm clock"
            type="time"
            value={alarmTime}
            onChange={(event)=> setAlarmTime(event.target.value)}
            inputProps={{
                step: 300
            }}
          />
          </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" id='save' color="primary" onClick={() => props.onSave(label, alarmTime)}>
            Save
        </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
