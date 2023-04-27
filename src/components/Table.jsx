import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
import Footer from "./Footer";

const Table = ({ load, showDelete }) => {
  const [newsUpdates, setNewsUpdates] = useState([
    {
      id: 1,
      title: "Loading....",
      details: "loading.....",
      date: "2023-04-27",
    },
    {
      id: 2,
      title: "Loading....",
      details: "loading.....",
      date: "2023-04-27",
    },
   
  ]);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://644a2d97a8370fb32146cf44.mockapi.io/NewsDetails"
      );
      setNewsUpdates(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [load]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://644a2d97a8370fb32146cf44.mockapi.io/NewsDetails/${id}`
      );
      setNewsUpdates(newsUpdates.filter((newsUpdate) => newsUpdate.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
    <h1>Latest News Updates</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Date</th>
            {showDelete && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {newsUpdates.map((newsUpdate) => (
            <tr key={newsUpdate.id}>
              <td>{newsUpdate.title}</td>
              <td>{newsUpdate.details}</td>
              <td>
                {new Date(newsUpdate.date).toLocaleDateString("en-US", options)}
              </td>
              {showDelete && (
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(newsUpdate.id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer count={newsUpdates.length} />
    </>
  );
};

export default Table;
