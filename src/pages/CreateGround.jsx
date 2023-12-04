import React, { useState } from "react";
import { PageTitle } from "../components/sidebar";
import { GroundForm } from "../components/ground";

const CreateGround = () => {


  return (
    <div className="grid grid-cols-1">
      <PageTitle title="Create Ground" />
      <GroundForm />
    </div>
  );
};

export default CreateGround;
