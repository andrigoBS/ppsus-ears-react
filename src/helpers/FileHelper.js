import { FormatterHelper } from './FormatterHelper';

export const FileHelper = (headers) => {
    const convertJsonToCsv = (rows, fileName) => {
        const csv = getHeaderWithSeparator();

        rows.forEach(row => {
            csv.push(getRowWithSeparator(row));
        });

        downloadExcel(csv.join('\n'), fileName);
    };

    const getHeaderWithSeparator = () => {
        return [headers.map(header => getHeaderColumn(header)).join(';')];
    };

    const getRowWithSeparator = (row) => {
        return headers.map(header => getColumn(row, header)).join(';');
    };

    const getHeaderColumn = (header) => {
        return `"${header.title}"`;
    };

    const getColumn = (row, header) => {
        return `"${FormatterHelper().formatValue(header.formatter, row[header.name])}"`;
    };

    const downloadExcel = (csv, fileName) => {
        const hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=UTF-8,%EF%BB%BF' + encodeURI(csv);
        hiddenElement.target = '_blank';

        hiddenElement.download = fileName + '.csv';
        hiddenElement.click();
    };

    return { convertJsonToCsv };
};