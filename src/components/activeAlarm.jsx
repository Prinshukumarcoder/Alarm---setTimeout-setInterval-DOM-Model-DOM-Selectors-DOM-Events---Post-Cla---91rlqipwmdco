import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActiveAlarm(props) {

  return (
//     <div>
//     </div>
//   );
// }
<>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.label}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box>
            {props.alarmTime}
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id = {props.label+'active-alarm-snooze'} onClick={props.onSnooze}>Snooze</Button>
          <Button id = {props.label+"active-alarm-close"} onClick={props.onClose}>Dismiss</Button>
          <Button id = {props.label+"active-alarm-delete"} onClick={props.onDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
