import React, { useEffect, useState } from "react";
import AllLaunches from "../../api/allLaunches.js";
import { CssBaseline } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Pagination from "@material-ui/lab/Pagination";
import TableRow from "@material-ui/core/TableRow";
import tableStyles from "./tableStyle";
import LaunchStatusComponent from "./launchStatusComponent";
import DateFormatterComponent from "./dateFormatComponent";
import { FiLoader } from "react-icons/fi";
import { connect } from "react-redux";
import Actions from "../../redux/actions";
import LaunchDialog from "./launchDialog";

function LaunchTable({
    launchStatus,
    dateRange
}) {
    // console.log(launch, dateRange);
    const classes = tableStyles();
    const [launches, setLaunches] = useState([]);
    const [filterLaunches, setFilterLaunches] = useState([]);
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [rangeMount, setRangeMount] = useState(false);
    const [statusMount, setStatusMount] = useState(false);
    const [selectedLaunch, setSelectedLaunch] = useState({});
    const [loading, setLoading] = useState(false);

    const renderElement = () => {
        if (loading) {
            return (<TableRow hover key="Loading" className={classes.loadingRow}>
                <TableCell colSpan={7} align="center">
                    <FiLoader className={classes.loadingIcon} />
                </TableCell>
            </TableRow>);
        }
        return (<TableRow hover key="Loading" className={classes.loadingRow}>
            <TableCell colSpan={7} align="center">
                No Result Found For the specified filter
            </TableCell>
        </TableRow>);

    };
    // const [rowsPerPage, setRowsPerPage] = useState(12);
    const tableRowCLick = (launch) => {
        console.log(launch);
        setOpen(true);
        setSelectedLaunch({ ...launch });
    };
    const handleClose = () => {
        setOpen(false);
    };
    const rowsPerPage = 12;
    const columns = [
        { id: "No." },
        { id: "Launched(UTC)" },
        { id: "Location" },
        { id: "Mission" },
        { id: "Orbit" },
        { id: "Launch Status" },
        { id: "Rocket" },
    ];
    const filterByStatus = async (statusValue) => {
        setOpen(false);
        // const allLaunches = await AllLaunches();
        // setLaunches([...allLaunches.data]);
        // setFilterLaunches([...allLaunches.data]);
        setLoading(true)
        if (statusValue == "Upcoming Launches") {
            console.log(statusValue)
            const allLaunches = await AllLaunches.get('/upcoming')
            console.log(allLaunches.data);
            setPage(1);
            setLoading(false)
            setFilterLaunches([...allLaunches.data]);
        } else if (statusValue == "Successful Launches") {
            console.log(statusValue)
            const allLaunches = await AllLaunches();
            const result = allLaunches.data.filter((launch) => {
                return launch.launch_success;
            });
            setPage(1);
            setLoading(false)
            setFilterLaunches([...result]);
        } else if (statusValue == "Past Launches") {
            console.log(statusValue)
            const allLaunches = await AllLaunches.get('/past')
            console.log(allLaunches.data);
            setPage(1);
            setLoading(false)
            setFilterLaunches([...allLaunches.data]);
        } else {
            console.log("Else")
            setPage(1);
            const allLaunches = await AllLaunches();
            setLoading(false)
            setFilterLaunches([...allLaunches.data]);
        }
    };
    const getLaunches = async (params = "") => {
        console.log("getLaunches")
        setOpen(false);
        setLoading(true)
        if (params === "") {
            renderElement()
            const allLaunches = await AllLaunches();
            setLaunches([...allLaunches.data]);
            setFilterLaunches([...allLaunches.data]);
            setLoading(false)
        } else {
            renderElement()
            const filterResult = await AllLaunches({
                params: {
                    start: params.start,
                    end: params.end,
                },
            });
            
            setLaunches([...filterResult.data]);
            setFilterLaunches([...filterResult.data]);
            setLoading(false)
        }
    };
    useEffect(() => {
        if (rangeMount) {
            // const urlParams = new URLSearchParams(window.location.search);
            // const myParam = urlParams.get('status');
            // console.log(myParam,"myParam")
            // filterByStatus(myParam);
        } else {
            setRangeMount(true);
        }
    }, [launchStatus]);

    useEffect(() => {
        if (statusMount) {
            let data = {
                start: dateRange.startDate.format("YYYY-MM-DD"),
                end: dateRange.endDate.format("YYYY-MM-DD"),
            };
            getLaunches(data);
        } else {
            setStatusMount(true);
        }
    }, [dateRange]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('status');
        console.log(myParam, "myParam")
        filterByStatus(myParam);
    }, []);
    return (
        <>
            <CssBaseline />
            <Paper className="root">
                <TableContainer className={classes.tableContainer} id="launchTable">
                    <Table size="medium" padding="default" stickyHeader={true}>
                        <TableHead>
                            <TableRow key="header">
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        style={{ minWidth: column.minWidth }}
                                        className={classes.tableCell}
                                    >
                                        {column.id}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterLaunches.length > 0
                                ? filterLaunches
                                    .slice(
                                        (page - 1) * rowsPerPage,
                                        (page - 1) * rowsPerPage + rowsPerPage
                                    )
                                    .map((launch, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                onClick={tableRowCLick.bind(this, launch)}
                                                key={index}
                                                className={classes.tableCell}
                                            >
                                                <TableCell style={{ width: 50 }}>
                                                    {index <= 8 && (page - 1) * rowsPerPage <= 0
                                                        ? "0" + ((page - 1) * rowsPerPage + index + 1)
                                                        : (page - 1) * rowsPerPage + index + 1}
                                                </TableCell>
                                                <TableCell style={{ width: 250 }}>
                                                    {/* {launch.launch_date_utc} */}
                                                    <DateFormatterComponent
                                                        launchDate={launch.launch_date_utc}
                                                    />
                                                </TableCell>
                                                <TableCell style={{ width: 200 }}>
                                                    {launch.launch_site.site_name}
                                                </TableCell>
                                                <TableCell style={{ width: 250 }}>
                                                    {launch.mission_name}
                                                </TableCell>
                                                <TableCell>
                                                    {launch.rocket.second_stage.payloads[0].orbit}
                                                </TableCell>
                                                <TableCell>
                                                    <LaunchStatusComponent
                                                        upcoming={launch.upcoming}
                                                        success={launch.launch_success}
                                                    // failed={}
                                                    />
                                                </TableCell>
                                                <TableCell>{launch.rocket.rocket_name}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                : renderElement()}
                        </TableBody>
                    </Table>
                </TableContainer>
                <LaunchDialog
                    open={open}
                    launch={selectedLaunch}
                    handleClose={handleClose}
                />
            </Paper>
            {filterLaunches.length > 12 ? (
                <div className={classes.paginationRoot}>
                    <Pagination
                        count={Math.ceil(filterLaunches.length / rowsPerPage)}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={(event, page) => {
                            setPage(page);
                        }}
                    />
                </div>
            ) : null}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        dateRange: state.range,
        launchStatus: state.launchStatus,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchTable);
// export default LaunchTable;
