import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  useEffect(() => {
    mount(ref.current);
  });

  const marketingRef = useRef(null);

  return <div ref={marketingRef}></div>;
};


export default MarketingApp;