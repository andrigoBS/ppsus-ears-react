import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useGenericTableStyles from './useGenericTableStyles';

const ActionsButtons = ({ actions }) => {
    const styles = useGenericTableStyles();

    return (
        <TableCell sx={styles.tableCell} >
            {actions.edit &&
                <IconButton color={'secondary'}>
                    <EditIcon />
                </IconButton>
            }

            {actions.delete &&
                <IconButton color={'secondary'}>
                    <DeleteIcon />
                </IconButton>
            }
        </TableCell>

    );
};
export default ActionsButtons;
