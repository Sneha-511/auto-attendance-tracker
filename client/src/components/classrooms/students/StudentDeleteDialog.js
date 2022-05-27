import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function StudentDeleteDialog(props) {
  const { openDialogDelete, handleCloseDialogDelete, handleDelete, Transition } = props;

  return (
    <Dialog
      open={openDialogDelete}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseDialogDelete}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{' Delete confirmation '}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to remove this student?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialogDelete}>Cancel</Button>
        <Button onClick={handleDelete}>Remove</Button>
      </DialogActions>
    </Dialog>
  );
}

export default StudentDeleteDialog;