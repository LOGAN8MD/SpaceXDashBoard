import React from "react";
import { Container } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { AiOutlineClose } from "react-icons/ai";
import dialogStyles from "./dialogStyles";
import { FaWikipediaW, FaYoutube } from "react-icons/fa";
import LaunchStatusComponent from "./launchStatusComponent";
import DateFormatterComponent from "./dateFormatComponent";

function LaunchDialog({ open, launch, handleClose }) {
  const dialogStyle = dialogStyles();

  if (launch === undefined || JSON.stringify(launch) === "{}") {
    return null;
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth={true}
      // maxWidth="md"
      aria-labelledby="max-width-dialog-title"
    >
      <Container>
        <div className={dialogStyle.dialogHeader}>
          <div className={dialogStyle.dialogHeaderItem}>
            <img
              src={launch.links.mission_patch_small}
              alt="alt"
              className={dialogStyle.missionImage}
            />
            <div className={dialogStyle.headInner}>
              <div className={dialogStyle.mission_name}>
                {launch.mission_name}
              </div>
              <div className={dialogStyle.rocket_name}>
                {launch.rocket.rocket_name}
              </div>
              <div className={dialogStyle.headerIconsList}>
                <FaWikipediaW
                  onClick={() => {
                    window.open(launch.links.wikipedia);
                  }}
                  className={dialogStyle.headerIcon}
                />
                <FaYoutube
                  onClick={() => {
                    window.open(launch.links.video_link);
                  }}
                  className={dialogStyle.headerIcon}
                />
              </div>
            </div>
            <div className={dialogStyle.headerStatus}>
              <LaunchStatusComponent
                upcoming={launch.upcoming}
                success={launch.launch_success}
              />
            </div>
          </div>
          <div>
            <AiOutlineClose
              onClick={handleClose}
              className={dialogStyle.icons}
            />
          </div>
        </div>
        <div className={dialogStyle.launchDetails}>
          {launch.details ? launch.details : null}
        </div>
        <table className={dialogStyle.launchDetailsTable}>
          <tbody>
            <tr className={dialogStyle.launchTableRow}>
              <td className={dialogStyle.launchTableData}>Flight Number</td>
              <td>{launch.flight_number}</td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Mission Name</td>
              <td>{launch.mission_name}</td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Rocket Type</td>
              <td>{launch.rocket.rocket_type}</td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Manufacturer</td>
              <td>
                {launch.rocket.second_stage.payloads[0].manufacturer
                  ? launch.rocket.second_stage.payloads[0].manufacturer
                  : "Data Not Found"}
              </td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Nationality</td>
              <td>
                {launch.rocket.second_stage.payloads[0].nationality
                  ? launch.rocket.second_stage.payloads[0].nationality
                  : "Data Not Found"}
              </td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Launch Date</td>
              <td>
                <DateFormatterComponent launchDate={launch.launch_date_utc} />
              </td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Payload Type</td>
              <td>
                {launch.rocket.second_stage.payloads[0].payload_type
                  ? launch.rocket.second_stage.payloads[0].payload_type
                  : "Data Not Found"}
              </td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Orbit</td>
              <td>
                {launch.rocket.second_stage.payloads[0].orbit
                  ? launch.rocket.second_stage.payloads[0].orbit
                  : "Data Not Found"}
              </td>
            </tr>
            <tr>
              <td className={dialogStyle.launchTableData}>Launch Site</td>
              <td>
                {launch.launch_site.site_name
                  ? launch.launch_site.site_name
                  : "Data Not Found"}
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Dialog>
  );
}

export default LaunchDialog;
