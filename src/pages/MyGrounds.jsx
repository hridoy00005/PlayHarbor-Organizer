import React, { useEffect } from "react";
import LayoutDashboard from "../components/layouts/LayoutDashboard";
import { PageTitle } from "../components/sidebar";
import { api, groundEndpoint } from "../api";

const MyGrounds = () => {
  const fetchMyGrounds = async () => {
    try {
      const res = await api.get(groundEndpoint.myGrounds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyGrounds();
  }, []);

  return <PageTitle title="My Grounds" />;
};

export default MyGrounds;
