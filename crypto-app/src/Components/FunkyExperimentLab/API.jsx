import React, { useEffect } from "react";
import { HOST_ADDRESS } from "../../envVars";
function API() {
  useEffect(() => {
    (async () => {
      const data = await fetch(HOST_ADDRESS + "/api/stats/all");
      const json = await data.json();
      console.log(json);
    })();
  });

  return (
    <>
      <div></div>
    </>
  );
}

export default API;
