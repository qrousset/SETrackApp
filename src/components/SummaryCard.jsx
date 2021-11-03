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
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.data.job_listing}
        </Typography>
        <div className="steps">
          <Typography variant="body2"> sent </Typography>
          <Typography variant="body2">{props.data.submission_date}</Typography>
          <Typography variant="body2"> {props.data.status_name} </Typography>
          <Typography variant="body2"> {props.data.next_status} </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
}
