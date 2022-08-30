import React from "react";
import ConsentMgrListComponent from "../../components/campaigns/container/ConsentMgrListComponent";
import ConsentMgrListContainerHeader from "../../components/campaigns/header/ConsentMgrListContainerHeader";



const ConsentMgrListContainer = () => {
  return (
    <>
      <div>
        <ConsentMgrListContainerHeader />
        <ConsentMgrListComponent />
      </div>
    </>
  );
};

export default ConsentMgrListContainer;
