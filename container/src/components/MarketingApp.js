import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {

  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: (location) => {
        const { pathname: nextPathName } = location;
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },

    });
  });


  return <div ref={ref}></div>;
};


export default MarketingApp;