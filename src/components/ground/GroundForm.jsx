import React, { useState } from "react";
import { MasterInput, MasterSelect } from "../shared";
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
    // size: "",
    // surface: "",
    openingTime: "",
    closingTime: "",
    price: "",
  });
  // Location State
  const [location, setLocation] = useState({
    // district: "",
    // upazila: "",
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
    setLocation({ ...location, district: name });
    const { id } = districts.find((ds) => ds.name === name); //Problem...
    const filteredUpazilas = upazila.filter((up) => up.district_id === id);
    setFilteredUpazilas(filteredUpazilas);
  };

  // Upazila
  const handleUpazila = (id) => {
    setLocation({ ...location, upazila: id });
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Name */}
      <MasterInput
        label="Ground Name"
        type="text"
        placeholder="Name"
        className="master-input w-full"
        value={groundState.name}
        onChange={(e) =>
          setGroundState({ ...groundState, name: e.target.value })
        }
      />

      {/* Sport Types */}
      <MasterSelect
        label="Sport Type"
        placeholder="Select Sport Type"
        options={["Cricket", "Football", "Badminton"]}
        state={groundState}
        setState={setGroundState}
        selectType="sportType"
      />

      {/* Size */}
      <div>
        <h2 className="text-lg text-white font-semibold">Size(m)</h2>
        <Select
          onChange={(value) => setGroundState({ ...groundState, size: value })}
          value={groundState.size}
          className="w-full"
          size="large"
          placeholder="Select Size"
          options={[
            {
              value: "Full",
              label: "Full",
            },
            {
              value: "Medium",
              label: "Medium",
            },
            {
              value: "Junior",
              label: "Junior",
            },
          ]}
        />
      </div>

       {/* Surface */}
       <div>
        <h2 className="text-lg text-white font-semibold">Surface</h2>
        <Select
          onChange={(value) =>
            setGroundState({ ...groundState, surface: value })
          }
          value={groundState.surface}
          className="w-full"
          size="large"
          placeholder="Select Surface"
          options={[
            {
              value: "Grass",
              label: "Grass",
            },
            {
              value: "Soil",
              label: "Soil",
            },
            {
              value: "Pitch",
              label: "Pitch",
            },
          ]}
        />
      </div>

      {/* Price */}
      <MasterInput
        label="Price(BDT)"
        type="number"
        placeholder="৳"
        className="master-input w-full"
        name="price"
        value={groundState.price}
        onChange={(e) =>
          setGroundState({ ...groundState, price: e.target.value })
        }
      />

      {/* Status */}
      <div>
        <h2 className="text-lg text-white font-semibold">Status</h2>
        <Select
          onChange={(value) =>
            setGroundState({ ...groundState, status: value })
          }
          value={groundState.status}
          className="w-full"
          size="large"
          placeholder="Select Status"
          options={[
            {
              value: "Pending",
              label: "Pending",
            },
            {
              value: "Granted",
              label: "Granted",
            },
            {
              value: "Rejected",
              label: "Rejected",
            },
          ]}
        ></Select>
      </div>
      {/* <MasterSelect label="Status" placeholder="Select Status" options={['Pending', 'Granted', 'Rejected']} state={groundState} setState={setGroundState} selectType="status" /> */}



     

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

      <div className="h-[1px] bg-white col-span-2"></div>

      {/* Location */}
      <h2 className="text-2xl text-white font-semibold col-span-2">Location</h2>

      {/* Select District */}
      <div className="col-span-1">
        <h2 className="text-lg text-white font-semibold">District</h2>
        <Select
          onChange={handleDistrict}
          value={location.district}
          className="w-full"
          size="large"
          placeholder="Select District"
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
          placeholder="Select Upazila"
        >
          {filteredUpazilas.map((upz) => (
            <Select.Option key={upz?.name}>{upz?.name}</Select.Option>
          ))}
        </Select>
      </div>

      {/* Address */}
      <div>
        <h2 className="text-lg text-white font-semibold">Address</h2>
        <TextArea
          rows={4}
          size="large"
          onChange={(e) =>
            setLocation({ ...location, address: e.target.value })
          }
          value={location.address}
        />
      </div>
    </div>
  );
};

export default GroundForm;
