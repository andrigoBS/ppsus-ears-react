import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteDialog from '../../dialogs/DeleteDialog';
import PdfDialog from '../../dialogs/PdfDialog';
import useGenericTableStyles from './useGenericTableStyles';

const ActionsButtons = ({ actions, row }) => {
    const styles = useGenericTableStyles();

    return (
        <TableCell sx={styles.tableCell} >

            {actions.edit && row[actions.edit.genericField] === null &&
                <IconButton color={'secondary'}>
                    <EditIcon />
                </IconButton>
            }

            {actions.delete && row[actions.delete.genericField] === null &&
                <DeleteDialog actions={actions.delete} row={row}/>
            }

            {actions.pdf &&
               <PdfDialog actions={actions} row={row}/>
            }

        </TableCell>

    );
};
export default ActionsButtons;
