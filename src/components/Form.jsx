import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "./DatePicker.jsx";

export default function FormPropsTextFields(props) {
  return (
    <div className="innerPopup">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <button
          id="popupClose"
          onClick={() => props.setTrigger(false)}
          className="close-btn"
        >
          close
        </button>
        <div className="generalInformation">
          {/* General Informations */}
          <TextField required id="Position_Name" label="Position Name" />
          <TextField required id="Company_Name" label="Company Name" />
          <TextField required id="Job_listing" label="Listing URL" />
          <TextField required id="Date" label="Submission Date" />
          <TextField required id="Status" label="Status" />
          <TextField required id="Next_Status" label="Next step" />
          <DatePicker />
        </div>
        <div className="process">
          <DatePicker id="Sent" label="Sent Date" />
          <DatePicker id="Sifted" label="Sifted Date" />
          <DatePicker id="PhoneInterview" label="Phone Interview Date" />
          <DatePicker id="Interview1" label="Interview 1 Date" />
          <DatePicker id="Interview2" label="Interview 2 Date" />
          <DatePicker id="onSite" label="Onsite Date" />
          <DatePicker id="Offer" label="Offer Date" />
          <TextField
            id="OfferAmount"
            label="OfferAmount"
            type="Number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="OfferAmount2"
            label="OfferAmount2"
            type="Number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </Box>
    </div>
  );
}
