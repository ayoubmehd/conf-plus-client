import { NextPage } from "next";
import dynamic from "next/dynamic";

const Calender = dynamic(() => import("../components/Calender"), {
  ssr: false,
});

const Confs: NextPage = () => {
  return <Calender />;
};

export default Confs;
