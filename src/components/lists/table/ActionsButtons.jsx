import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteDialog from '../../dialogs/DeleteDialog';
import PdfDialog from '../../dialogs/PdfDialog';
import useGenericTableStyles from './useGenericTableStyles';

const ActionsButtons = ({ actions, onReload, row }) => {
    const styles = useGenericTableStyles();

    return (
        <TableCell sx={styles.tableCell} >

            {(!actions.permissionField || row[actions.permissionField] !== null) &&

                <React.Fragment>
                    {
                        actions.edit && row[actions.edit.genericField] === null &&
                        <IconButton color={'secondary'}>
                            <EditIcon/>
                        </IconButton>
                    }

                    {actions.delete && row[actions.delete.genericField] === null &&
                        <DeleteDialog actions={actions.delete} row={row} onReload={onReload}/>
                    }

                    {actions.pdf &&
                        <PdfDialog actions={actions} row={row}/>
                    }

                </React.Fragment>

            }
        </TableCell>
    );
};
export default ActionsButtons;
