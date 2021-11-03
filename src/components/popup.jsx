import * as React from "react";
import Form from "./form";

export default function Popup(props) {
  return props.trigger ? (
    <div className="outerPopup" styles="">
      <Form />
    </div>
  ) : (
    ""
  );
}
