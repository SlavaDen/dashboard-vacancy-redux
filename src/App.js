import { useEffect } from "react";
import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { useDispatch } from "react-redux";
import data from "./mock/data.json";
import { addPosition } from "store/positions/position-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPosition(data));
  }, []);

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
