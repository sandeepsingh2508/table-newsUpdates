import { useState } from "react";
import CreateNewsUpdate from "../components/CreateNewsUpdate";
import Table from "../components/Table";

const Home = () => {
  const [load, setLoad] = useState(false);

  return (
    <>
      <CreateNewsUpdate setLoad={setLoad} />
      <Table load={load} showDelete={true} />
    </>
  );
};

export default Home;
