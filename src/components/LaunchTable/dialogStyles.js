import { makeStyles } from "@material-ui/core/styles";

const dialogStyles = makeStyles((theme) => ({
  icons: {
    fontSize: "24px",
    cursor:'pointer'
    // marginTop: '15px'
  },
  missionImage: {
    height: "72px",
    weight: "72px",
    marginBottom: "15px",
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },
  dialogHeaderItem: {
    display: "flex",
  },
  mission_name: {
    fontSize: "18px",
    fontWeight: 600,
  },
  headInner: {
    marginLeft: "15px",
  },
  rocket_name: {
    fontSize: "14px",
    fontWeight: 500,
    marginTop: "10px",
    marginLeft: "5px",
  },
  headerIcon: {
    fontSize: "16px",
    marginRight: "5px",
    marginLeft: "5px",
    cursor:'pointer',
  },
  headerIconsList: {
    marginTop: "5px",
  },
  headerStatus: {
    width: "80px",
    marginLeft: "10px",
  },
  launchDetails: {
    marginTop: "10px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  launchDetailsTable: {
    width: "100%",
    fontSize:'14px',
    textAlign: "left",
    '& tr':{
        lineHeight:"40px"
    },
    '& td':{
        borderBottom: "1px solid #E4E4E7",
    }
  },
  launchTableData: {
    width: "40%",
  },
  launchTableRow:{
    borderBottom: "1px solid #E4E4E7",
  }
}));

export default dialogStyles;
