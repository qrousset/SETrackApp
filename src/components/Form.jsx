import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "./DatePicker.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FormPropsTextFields(props) {
  const [value, setValue] = React.useState("Notes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    const data = new FormData(event.currenttarget);
    console.log(data);
  };

  return (
    <div className="innerPopup">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <button
          id="popupClose"
          onClick={() => props.setTrigger(false)}
          className="close-btn"
        >
          X
        </button>
        <div className="generalInformation">
          {/* General Informations */}
          <TextField required id="Position_Name" label="Position name" />
          <TextField required id="Company_Name" label="Company name" />
          <TextField required id="Job_listing" label="Listing URL" />
          <DatePicker id="Sifted" label="Submission Date" />
          <TextField required id="Status" label="Current step" />
          <TextField required id="Next_Status" label="Next step" />
        </div>
        <div className="notes">
          <TextField
            id="outlined-multiline-flexible"
            style="width: 100%"
            label="Notes"
            multiline
            maxRows={6}
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="process">
          <DatePicker id="Sent" label="Sent Date" />
          <DatePicker id="Sifted" label="Sifted Date" />
          <DatePicker id="PhoneInterview" label="Phone Interview Date" />
          <DatePicker id="Interview1" label="Interview 1 Date" />
          <DatePicker id="Interview2" label="Interview 2 Date" />
          <DatePicker id="onSite" label="Onsite Date" />
          <DatePicker id="Offer" label="Offer Date" />
        </div>
        <div className="offers">
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
        <div className="buttons">
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button type="submit" variant="contained">
              Create
            </Button>
            <Button variant="outlined">Update</Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
}
