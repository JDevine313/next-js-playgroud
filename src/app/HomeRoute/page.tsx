import BlueBlock from "./BlueBlock/page";
import RedBlock from "./RedBlock/page";

const HomeRoute = () => {
  return (
    <div className="HomeRoute">
      <div>HomeRoute works</div>
      {/* can still pass props regualarly */}
      <BlueBlock prop={"hello"} />
      <RedBlock />
    </div>
  );
};

export default HomeRoute;
