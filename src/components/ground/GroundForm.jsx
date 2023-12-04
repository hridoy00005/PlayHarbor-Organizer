import React, { useState } from "react";
import { MasterInput } from "../shared";
import { Input, Select, TimePicker, Upload } from "antd";
// import { api } from "../../api";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import districts from "../../utils/geo_bd/districts.json";
import upazila from "../../utils/geo_bd/upazila.json";

const GroundForm = ({ state, setState, images = [] }) => {
  const { TextArea } = Input;
  const { token } = useSelector((state) => state.auth);
  const [fileList, setFileList] = useState([]);
  const [groundState, setGroundState] = useState({
    name: "",
    sportType: "",
    images: "",
    size: "",
    surface: "",
    openingTime: "",
    closingTime: "",
    price: "",
  });
  // Location State
  const [location, setLocation] = useState({
    district: "",
    upazila: "",
    address: "",
  });
  //Filtered Upazilas State
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  
  // Image List Addition
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    fileList.forEach((file) => {
      images.push(file?.response?.url);
    });
  };

  // District
  const handleDistrict = (name) => {
    setLocation({...location, district:name});
    const {id} = districts.find((ds)=>(ds.name===name));//Problem...
    const filteredUpazilas = upazila.filter(up=>up.district_id === id);
    setFilteredUpazilas(filteredUpazilas);
  };

  // Upazila
  const handleUpazila = (id) => {
    setLocation({...location, upazila:id})
  };

  //Time Changing
  const onTimechange = (time) => {
    setGroundState({
      ...groundState,
      openingTime: dayjs(time[0]).valueOf(),
      closingTime: dayjs(time[1]).valueOf(),
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <h2 className="text-lg text-white font-semibold">Sport Type</h2>
        <Select
          // onChange={(value) => setState({ ...state, sportType_id: value })}
          // value={state.sportType_id}
          className="w-full"
          size="large"
          placeholder="Select Type"
        ></Select>
      </div>

      {/* Price */}
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

      {/* Status */}
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

      {/* Surface */}
      <div>
        <h2 className="text-lg text-white font-semibold">Surface</h2>
        <Select
          // onChange={(value) => setState({ ...state, category_id: value })}
          // value={state.category_id}
          className="w-full bg-transparent"
          size="large"
          placeholder="Select Type"
          style={{ backgroundColor: "transparent" }}
        >
          {/* {cateogryList.map((ct) => (
            <Select.Option key={ct?.id}>{ct?.name}</Select.Option>
          ))} */}
        </Select>
      </div>

      {/* Time Duration */}
      <div>
        <h2 className="text-lg text-white font-semibold">Time Duration</h2>
        <div className="grid grid-cols-1">
          <TimePicker.RangePicker
            size="large"
            format="HH a"
            onChange={onTimechange}
          />
        </div>
      </div>

      {/* Image Addition */}
      <div className="  ">
        <h2 className="text-lg text-white font-semibold">Add Images</h2>
        {fileList.lenght >= 3 ? null : (
          <Upload
            action="http://localhost:5000/file-upload"
            headers={{ Authorization: `Bearer ` + token }}
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

      <div className="h-[1px] bg-white col-span-3"></div>

      {/* Location */}
      <h2 className="text-2xl text-white font-semibold col-span-3">Location</h2>
   
      {/* Select Zila */}
      <div className="col-span-1">
        <h2 className="text-lg text-white font-semibold">District</h2>
        <Select
          onChange={handleDistrict}
          value={location.district}
          className="w-full"
          size="large"
          placeholder="Select Type"
          showSearch
        >
          {districts.map((ds) => (
            <Select.Option key={ds?.name}>{ds?.name}</Select.Option>
          ))}
        </Select>
      </div>

      {/* Select Upazila */}
      <div className="col-span-1">
        <h2 className="text-lg text-white font-semibold">Upazila</h2>
        <Select
          onChange={handleUpazila}
          value={location.upazila}
          className="w-full"
          size="large"
          placeholder="Select Type"
        >
          {filteredUpazilas.map((upz) => (
            <Select.Option key={upz?.id}>{upz?.name}</Select.Option>
          ))}
        </Select>
      </div>

      <div>
        <h2 className="text-lg text-white font-semibold">Address</h2>
        <TextArea rows={4} />
      </div>
    </div>
  );
};

export default GroundForm;
