import React, { useState } from "react";
import LayoutDashboard from "../components/layouts/LayoutDashboard";
import { PageTitle } from "../components/sidebar";
import { GroundForm } from "../components/ground";
import { MasterButton } from "../components/shared";

const CreateGround = () => {
const [fileList, setFileList] =useState([]);
const [state, setState] =useState({});

  return (
    <div>
      <PageTitle title="Create Ground" />
      <GroundForm state={state} setState={setState} fileList={fileList} setFileList={setFileList} />
      <MasterButton
        btnText="Create"
        className="event-btn-primary w-full mt-5 py-5  tracking-wide col-span-2"
        // onClick={onSubmit}
        // disabled={disabled}
      />
    </div>
  );
};

export default CreateGround;
