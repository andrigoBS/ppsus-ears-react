import { CircularProgress, Paper } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const GenericTable = ({ headers, rows }) => {
    const formatterOfDate = (value) => {
        const date = new Date(value);
        return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    };

    const formatterOfYesOrNo = (value) => {
        return value === 0 ? 'Não' : 'Sim';
    };

    const chooseFormatter = (name, value) => {
        if(value !== null){
            if(name === 'date'){
                return formatterOfDate(value);
            }
            if(name === 'yes-or-no'){
                return formatterOfYesOrNo(value);
            }
        }
    };

    if(!rows){
        return (<CircularProgress />);
    }

    return (
        <Paper style={{ marginTop: '30px' }}>
            <TableContainer>
                <Table sx={{ maxHeight: 650 }} size="small">
                    <TableHead style={{ backgroundColor: '#2db7bc' }}>
                        <TableRow>
                            {headers.map((header, key) => (
                                <TableCell key={key} style={{ color: 'white', fontSize: 17 }}>
                                    {header.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.map((row, key) => (
                            <TableRow key={key} style={{ backgroundColor: key % 2 ? 'white' : '#fafafa' }}>
                                {headers.map((header, key) => (
                                    <TableCell key={key} style={{ fontSize: 16 }} align="left">
                                        { header.formatter === undefined ? row[header.name] : chooseFormatter(header.formatter, row[header.name])}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
export default GenericTable;