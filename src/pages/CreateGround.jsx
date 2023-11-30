import React from "react";
import LayoutDashboard from "../components/layouts/LayoutDashboard";
import { PageTitle } from "../components/sidebar";
import { GroundForm } from "../components/ground";

const CreateGround = () => {
  return (
    <div>
      <PageTitle title="Create Ground" />
      <GroundForm />
    </div>
  );
};

export default CreateGround;
