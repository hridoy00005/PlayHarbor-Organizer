import React, { useState } from "react";
import { PageTitle } from "../components/sidebar";
import { GroundForm } from "../components/ground";
import { MasterButton } from "../components/shared";

const CreateGround = () => {
const [state, setState] =useState({});
const images = [];


const onSubmit =()=>{
  
}
  return (
    <div>
      <PageTitle title="Create Ground" />
      <GroundForm state={state} setState={setState} images={images} />
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
