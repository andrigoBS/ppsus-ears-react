import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useTherapistService from '../../users/therapist/useTherapistService';

const DeleteDialog = ({ actions, row }) => {
    const [open, setOpen] = React.useState(false);
    const service = useTherapistService();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChooseDelete = () => {
        if(actions.entity === 'equipment'){
            service.deleteEquipment(row.id);
            handleClose();
        }
    };

    return (

        <React.Fragment>
            <IconButton color={'secondary'} onClick={handleOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {actions.message} "{row.model}"?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button  color="primary" onClick={handleChooseDelete}>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
export default DeleteDialog;
