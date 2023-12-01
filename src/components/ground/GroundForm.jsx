import React, { useEffect, useState } from "react";
import { MasterButton, MasterInput } from "../shared";
import { Input, Select, Upload } from "antd";
import { api } from "../../api";

const GroundForm = ({state, setState, fileList, setFilelist }) => {
  const { TextArea } = Input;

  const [sportTypeList, setSportTypeList] = useState([]);

  const handleChange = ({ fileList: newFilelist }) => {
    setFilelist(newFilelist);
  };

  const fetchTypeList = async()=>{
    try {
      const res = await api.get(sportType.getSportType);
      setSportTypeList(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{fetchTypeList},[]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h2 className="text-lg text-white font-semibold">Sport Type</h2>
        <Select
          onChange={(value) => setState({ ...state, sportType_id: value })}
          value={state.sportType_id}
          className="w-full"
          size="large"
          placeholder="Select Type"
        >
          {sportTypeList.map((ct) => (
            <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
          ))}
        </Select>
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

      {/* Size */}
      <div>
        <h2 className="text-lg text-white font-semibold">Size</h2>
        <div className="grid grid-cols-2 gap-10 justify-around">
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Height "
            className="master-input w-full "
            name="height"
            // value={forgotpassword.email}
            // onChange={onChange}
          />
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Width "
            className="master-input w-full "
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
          className="w-full bg-transparent"
          size="large"
          placeholder="Select Type"
          style={{ backgroundColor: 'transparent' }}
        >
          {/* {cateogryList.map((ct) => (
            <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
          ))} */}
        </Select>
      </div>

      <div>
        <h2 className="text-lg text-white font-semibold">Time Duration</h2>
        <div className="grid grid-cols-2 gap-10 justify-between">
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Openning Time"
            className="master-input w-full bg-transparent"
            name="onpeningTime"
            // value={forgotpassword.email}
            // onChange={onChange}
          />
          <MasterInput
            // label="Size"
            type="text"
            placeholder="Closing Time"
            className="master-input w-full"
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

      <div className="  ">
        <h2 className="text-lg text-white font-semibold">Add Images</h2>
        {fileList.lenght >= 3 ? null : (
          <Upload
            // action="http://localhost:8000/api/file-upload"
            // headers={{ Authorization: `Bearer ` + token }}
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            maxCount={3}
            className="text-white hover:font-semibold "
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
        )}
      </div>
    </div>
  );
};

export default GroundForm;
