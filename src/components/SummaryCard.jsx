import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.data.company_name}
        </Typography>
        <Typography variant="h5" component="div">
          {props.data.application_name || "Placeholder"}
        </Typography>
        <Typography sx={{ mb: 1.0 }} color="text.secondary">
          Comment on the listing
        </Typography>
        <div className="steps">
          <Typography variant="body2"> Submission date: </Typography>
          <Typography variant="body2">{props.data.submission_date}</Typography>
          <Typography variant="body2">Current step:</Typography>
          <Typography variant="body2"> {props.data.status_name} </Typography>
          <Typography variant="body2">Next step:</Typography>
          <Typography variant="body2">{props.data.next_status}</Typography>
          <Typography variant="body2">Next step date:</Typography>
          <Typography variant="body2">{props.data.date}</Typography>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Button size="small" href={props.data.job_listing}>
          Listing
        </Button>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
}
