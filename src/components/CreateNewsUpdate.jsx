import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateNewsUpdate = ({ setLoad }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value.slice(0, 100));
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value.slice(0, 500));
  };

  const handleDateChange = (newDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (newDate.getTime() < today.getTime()) {
      setDate(today);
    } else {
      setDate(newDate);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log({ title, details, date });
      let res = await axios.post(
        "https://644a2d97a8370fb32146cf44.mockapi.io/NewsDetails",
        { title, details, date }
      );
      console.log("res", res);
      setIsOpen(false);
      setLoad((load) => !load);
    } catch (error) {
      console.log(error);
      setIsOpen(false);
    }
    setTitle("")
    setDetails("")
  };

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <div style={{ marginTop: 60 }}>
      {isOpen ? (
        <form onSubmit={handleSubmit} className="pop-in">
          <label htmlFor="title-input" className="form-label">
            News Update Title:
          </label>
          <input
            id="title-input"
            className="form-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title maximum 100 letters"
            maxLength={100}
            required
          />
          <label htmlFor="details-input" className="form-label">
            News Update Details:
          </label>
          <textarea
            id="details-input"
            className="form-textarea"
            value={details}
            onChange={handleDetailsChange}
            placeholder="Enter details maximum 500 letters"
            maxLength={500}
            required
          />
          <label htmlFor="date-picker" className="form-label">
            Date of Update:
          </label>
          <DatePicker
            id="date-picker"
            selected={date}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            required
          />
          <div>
            <button type="submit" className="form-submit-button">
              Submit
            </button>
            <button
              onClick={() => {
                setTitle("");
                setDetails("");
                setIsOpen(false);
              }}
              className="form-submit-button"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="open-form-button" onClick={handleButtonClick}>
          Add News Update
        </button>
      )}
    </div>
  );
};

export default CreateNewsUpdate;
