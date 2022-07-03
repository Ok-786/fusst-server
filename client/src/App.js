import { Fragment, useState } from "react";
import "./App.css";
import Image from "./img/fui.jpeg";
import Image2 from "./img/furc.jpeg";

function App() {
  const initForm = {
    company: "",
    name: "",
    cnic: "",
    contact: "",
    designation: "",
    name1: "",
    cnic1: "",
    contact1: "",
    designation1: "",
    name2: "",
    cnic2: "",
    contact2: "",
    designation2: "",
  };

  const [enable, setEnable] = useState(false);
  const [form, setForm] = useState(initForm);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(form);
      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
    setForm(initForm);
  };

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="mainmain">
        <div className="headinggrid">
          <img src={Image} alt="Logo" className="logo" />
          <div className="unsetting">
            <h2>FOUNDATION UNIVERSITY SCHOOL OF SCIENCE & TECHNOLOGY</h2>

            <h3>Open House 2022</h3>
          </div>
          <img src={Image2} alt="Logo" className="logo" />
        </div>

        <form onSubmit={onSubmitHandler}>
          <div>
            <input
              type="text"
              id="company"
              name="company"
              className="company"
              placeholder="Company Name"
              onChange={onChangeHandler}
              value={form.company}
              onFocus={() => setEnable(true)}
            />
          </div>

          {enable && (
            <Fragment>
              <div className="main">
                <div class="form1">
                  <h3>Employee 1</h3>
                  <input
                    type="text"
                    value={form.name}
                    name="name"
                    id="name"
                    onChange={onChangeHandler}
                    placeholder="Name"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    value={form.cnic}
                    name="cnic"
                    id="cnic"
                    onChange={onChangeHandler}
                    placeholder="CNIC"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    value={form.designation}
                    onChange={onChangeHandler}
                    placeholder="Designation"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="number"
                    value={form.contact}
                    name="contact"
                    onChange={onChangeHandler}
                    placeholder="Contact"
                  />
                  <br />
                  <br />
                  <br />
                </div>
                <div class="form1">
                  <h3>Employee 2</h3>
                  <input
                    type="text"
                    name="name1"
                    value={form.name1}
                    id="name"
                    onChange={onChangeHandler}
                    placeholder="Name"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    value={form.cnic1}
                    name="cnic1"
                    id="cnic"
                    onChange={onChangeHandler}
                    placeholder="CNIC"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="designation"
                    name="designation1"
                    value={form.designation1}
                    placeholder="Designation"
                    onChange={onChangeHandler}
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    value={form.contact1}
                    id="number"
                    placeholder="Contact"
                    onChange={onChangeHandler}
                    name="contact1"
                  />
                  <br />
                  <br />
                  <br />
                </div>
                <div class="form1">
                  <h3>Employee 3</h3>
                  <input
                    type="text"
                    name="name2"
                    value={form.name2}
                    id="name"
                    onChange={onChangeHandler}
                    placeholder="Name"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="cnic"
                    name="cnic2"
                    value={form.cnic2}
                    onChange={onChangeHandler}
                    placeholder="CNIC"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="designation"
                    name="designation2"
                    onChange={onChangeHandler}
                    value={form.designation2}
                    placeholder="Designation"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="number"
                    value={form.contact2}
                    placeholder="Contact"
                    onChange={onChangeHandler}
                    name="contact2"
                  />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              <button
                className="submit"
                type="submit"
                onclick={onSubmitHandler}
              >
                Submit
              </button>
            </Fragment>
          )}
        </form>
      </div>
    </Fragment>
  );
}

export default App;
