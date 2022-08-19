import React from "react";
import ConsentListComponent from "../../components/campaigns/container/ConsentListComponent";
import ConsentMgrListContainerHeader from "../../components/campaigns/header/ConsentMgrListContainerHeader";
import RiArrow from "../../components/common/RiArrow";

const ConsentMgrListContainer = () => {
  return (
    <>
      <div>
        <ConsentMgrListContainerHeader />
        <ConsentListComponent />
      </div>
    </>
  );
};

export default ConsentMgrListContainer;
