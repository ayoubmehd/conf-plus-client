import type { NextPage } from "next";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Conf = dynamic(() => import("../components/Conf"), {
  ssr: false,
});

const ConfPage: NextPage = () => {
  return <Conf />;
};

export default ConfPage;
