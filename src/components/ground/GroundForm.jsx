import React from "react";
import { MasterButton, MasterInput } from "../shared";
import { Input, Select, Upload } from "antd";

const GroundForm = () => {
  const { TextArea } = Input;
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <h2 className="text-lg text-white font-semibold">Sport Type</h2>
        <Select
          // onChange={(value) => setState({ ...state, category_id: value })}
          // value={state.category_id}
          className="w-full"
          size="large"
          placeholder="Select Type"
        >
          {/* {cateogryList.map((ct) => (
            <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
          ))} */}
        </Select>
      </div>
      <div>
        <h2 className="text-lg text-white font-semibold">Add Images</h2>
        <Upload
          // action="http://localhost:8000/api/file-upload"
          // headers={{ Authorization: `Bearer ` + token }}
          // listType="picture-card"
          // fileList={fileList}
          // onChange={handleChange}
          // beforeUpload={(file) => console.log(file)}
          maxCount={5}
          // showUploadList={!fromEdit}
        >
          <div>
            <div
              style={{
                marginTop: 8,
              }}
            >
              <i className="fas fa-upload"></i> Upload
            </div>
          </div>
        </Upload>
      </div>
      <div>
        <h2 className="text-lg text-white font-semibold">Status</h2>
        <Select
          // onChange={(value) => setState({ ...state, category_id: value })}
          // value={state.category_id}
          className="w-full"
          size="large"
          placeholder="Select Type"
        >
          {/* {cateogryList.map((ct) => (
            <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
          ))} */}
        </Select>
      </div>
      <div>
        <h2 className="text-lg text-white font-semibold">Size</h2>
        <div className="flex justify-between">
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Height "
            className="master-input w-[200px]"
            name="height"
            // value={forgotpassword.email}
            // onChange={onChange}
          />
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Width "
            className="master-input w-[200px]"
            name="wight"
            // value={forgotpassword.email}
            // onChange={onChange}
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg text-white font-semibold">Surface</h2>
        <Select
          // onChange={(value) => setState({ ...state, category_id: value })}
          // value={state.category_id}
          className="w-full"
          size="large"
          placeholder="Select Type"
        >
          {/* {cateogryList.map((ct) => (
            <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
          ))} */}
        </Select>
      </div>

      <div>
        <h2 className="text-lg text-white font-semibold">Time Duration</h2>
        <div className="flex justify-between">
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Openning Time"
            className="master-input w-[200px]"
            name="onpeningTime"
            // value={forgotpassword.email}
            // onChange={onChange}
          />
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Closing Time"
            className="master-input w-[200px]"
            name="closingTime"
            // value={forgotpassword.email}
            // onChange={onChange}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg text-white font-semibold">Adress</h2>
        <TextArea rows={4} />
      </div>

      <div>
        <h2 className="text-lg text-white font-semibold">Price</h2>
        <MasterInput
          // label="Size"
          type="text"
          placeholder="BDT"
          className="master-input w-full"
          name="price"
          // value={forgotpassword.email}
          // onChange={onChange}
        />
        {/* <Input
          type="text"
          placeholder="BDT"
          size="large"
          style={{ fontFamily: "Oswald", letterSpacing: "0.75px" }}
        /> */}
      </div>

      <MasterButton
        btnText="Create"
        className="event-btn-primary w-full mt-5 py-5  tracking-wide col-span-2"
        // onClick={onSubmit}
        // disabled={disabled}
      />
    </div>
  );
};

export default GroundForm;
