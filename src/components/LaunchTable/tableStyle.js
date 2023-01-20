import { makeStyles } from '@material-ui/core/styles';

const tableStyles = makeStyles((theme) => ({
    tableContainer: {
        maxHeight: '70vh',
        marginTop: '20px'
    },
    root: {

    },
    paginationRoot: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        justifyContent: 'flex-end'
    },
    tableCell: {
        borderBottom: 'none'
    },
    loadingRow: {
        height: '70vh',
    },
    loadingIcon: {
        fontSize: '50px',
        textAlign: "center"
    }
}));

export default tableStyles;