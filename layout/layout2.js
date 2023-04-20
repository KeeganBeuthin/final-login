import CardLineChart from "../components/components/Cards/CardLineChart.js";
import CardBarChart from "../components/components/Cards/CardBarChart.js";
import CardPageVisits from "../components/components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../components/components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from ".//Admin.js";


export default function Db() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
