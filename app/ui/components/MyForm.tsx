import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

interface MyFormProps {
  open: boolean,
  table: string,
  id: number | string,
  title: string,
  onHandleClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function MyForm(props: MyFormProps) {
  return (
    <>
      <BootstrapDialog
        onClose={props.onHandleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}        
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props.title}
        </DialogTitle>

        <DialogContent dividers>
          
          <Typography gutterBottom>
            Esta sendo apresentado o ID {props.id}
          </Typography>

        </DialogContent>
        
        <DialogActions>
          <Button autoFocus onClick={props.onHandleClose}>
            Salvar
          </Button>
        </DialogActions>

      </BootstrapDialog>
    </>
  );
}