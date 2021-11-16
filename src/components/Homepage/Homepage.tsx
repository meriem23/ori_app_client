import React from "react";
import UnderConstructionIllustration from "../../images/UnderConstructionIllustration";
import { useStylesDashboard } from "../../styles/dashboardStyles";

function Homepage() {
  const dashboardClasses = useStylesDashboard();
  return (
    <div className={dashboardClasses.dashboard_container}>
      <div>
        <UnderConstructionIllustration />
        <p className={dashboardClasses.under_construction_text}>
          Dashboard en court de construction
        </p>
      </div>
    </div>
  );
}

export default Homepage;
