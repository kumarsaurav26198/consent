import React from "react";
import ConsentMgrListEditComponent from "../../components/campaigns/container/ConsentMgrListEditComponent";
import ConsentMgrListEditContainerHeader from "../../components/campaigns/header/ConsentMgrListEditContainerHeader";

const ConsentMgrListEditContainer = () => {
  return (
    <>
      <div>
        <ConsentMgrListEditContainerHeader />
        <div>
          <ConsentMgrListEditComponent />
        </div>
      </div>
    </>
  );
};

export default ConsentMgrListEditContainer;
