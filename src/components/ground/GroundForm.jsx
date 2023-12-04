import React, { useState } from "react";
import { MasterButton, MasterInput, MasterSelect } from "../shared";
import { Input, Select, TimePicker, Upload } from "antd";
import { Grounds, api,  } from "../../api";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import districts from "../../utils/geo_bd/districts.json";
import upazila from "../../utils/geo_bd/upazila.json";

const GroundForm = () => {
  const { TextArea } = Input;
  const { token } = useSelector((state) => state.auth);
  // Image State
  const [fileList, setFileList] = useState([]);
  // Ground State
  const [groundState, setGroundState] = useState({
    name: "",
    sportType: "",
    // size: "",
    surface: "",
    openingTime: "",
    closingTime: "",
    price: "",
  });
  // Location State
  const [location, setLocation] = useState({
    address: "",
  });
  //Filtered Upazilas State
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  // Image List Addition
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  //Time Changing
  const onTimechange = (time) => {
    setGroundState({
      ...groundState,
      openingTime: dayjs(time[0]).valueOf(),
      closingTime: dayjs(time[1]).valueOf(),
    });
  };

  // Submitting Form
  const onSubmit = async () => {
    const images = fileList.map((file) => file?.response?.result?.url);
    const groundData = { ...groundState, addressData: { ...location }, images };
    try {
      const res = await api.post(Grounds.createGround, groundData);
      if(res.success){
        navigate("/my-grounds");
      }
    } catch (error) {
      console.log(error);
    }
  };

const disabled = !fileList || !location.district || !location.upazila || !location.address || !groundState.sportType || !groundState.size || !groundState.surface || !groundState.price || !groundState.openingTime || !groundState.closingTime;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Name */}
      <MasterInput
        label="Ground Name"
        type="text"
        placeholder="Name"
        className="master-input w-full tracking-wider"
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
        onChange={(value) =>
          setGroundState({ ...groundState, sportType: value })
        }
        value={groundState.sportType}
      />

      {/* Size */}
      <MasterSelect
        label="Size"
        placeholder="Select Size"
        options={["Full", "Medium", "Junior"]}
        onChange={(value) => setGroundState({ ...groundState, size: value })}
        value={groundState.size}
      />

      {/* Surface */}
      <MasterSelect
        label="Surface"
        placeholder="Select Surface"
        options={["Grass", "Soil", "Pitch"]}
        onChange={(value) => setGroundState({ ...groundState, surface: value })}
        value={groundState.surface}
      />

      {/* Price */}
      <MasterInput
        label="Price(BDT)"
        type="number"
        placeholder="৳"
        className="master-input w-full tracking-wider"
        name="price"
        value={groundState.price}
        onChange={(e) =>
          setGroundState({ ...groundState, price: e.target.value })
        }
      />

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
      <div className="col-span-3">
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

      {/* Select District */}
      <div className="col-span-1">
        <MasterSelect
          label="District"
          showSearch
          placeholder="Select District"
          options={districts.map((dst) => dst.name)}
          onChange={(name) => {
            setLocation({ ...location, district: name });
            const { id } = districts.find((ds) => ds.name === name);
            const filteredUpazilas = upazila.filter(
              (up) => up.district_id === id
            );
            console.log(filteredUpazilas);
            setFilteredUpazilas([...filteredUpazilas.map((upz) => upz.name)]);
          }}
          value={location.district}
        />
      </div>

      {/* Select Upazila */}
      <div className="col-span-1">
        <MasterSelect
          label="Upazila"
          placeholder="Select Upazila"
          options={filteredUpazilas}
          onChange={(upazila) => {
            setLocation({ ...location, upazila: upazila });
          }}
          value={location.upazila}
        />
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

      {/* Submit Button */}
      <div className="col-span-3 text-center">
        <MasterButton
          btnText="Create"
          className="event-btn-primary mt-5 px-10 py-3 tracking-wide"
          onClick={onSubmit}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default GroundForm;
