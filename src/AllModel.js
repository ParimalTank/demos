import React from "react";
import DeleteTranscribe from "./DeleteTranscription";
import CancelTranscribe from "./CancelTranscription";
import EditTranscribe from "./EditTranscription";

export const AllModel = () => {
  return (
    <div>
      <DeleteTranscribe />
      <CancelTranscribe />
      <EditTranscribe />
    </div>
  );
};
