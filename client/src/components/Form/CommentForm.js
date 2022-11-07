import Card from "./Card";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const FormWizard = () => {
  const [comment, setcomment] = useState("");
  const [userid, setuserid] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //  getproducts();
  // }, []);

  //  const getproducts = async () => {
  //    let result = await fetch("http://localhost:5005/commentrouter");
  //    result = await result.json();
  //    setData(result);
  //  };
  //   console.warn("results", data);

  const handleSubmit = async () => {
    const result = fetch("http://localhost:5005/commentrouter", {
      method: "post",
      body: JSON.stringify({ comment, userid }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <>
      <Card>
        <Card.Header>
          <div className="header-title">
            <h4 className="card-title">Comments</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <ul className="list-inline m-0 p-0">
            <li className="d-flex mb-2">
              <div className="news-icon me-3"></div>

              {/* {data.map((item) => (
                <p className="news-detail mb-0">{item.comment}</p>
              ))} */}
            </li>{" "}
            <input
              type="text"
              className="rounded"
              placeholder="Place a Comment here!"
              value={comment}
              onChange={(e) => {
                setcomment(e.target.value);
              }}
            />
            <div className="comment-attagement d-flex">
              <button className="me-2 text-body" onClick={handleSubmit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M470.3,271.15,43.16,447.31a7.83,7.83,0,0,1-11.16-7V327a8,8,0,0,1,6.51-7.86l247.62-47c17.36-3.29,17.36-28.15,0-31.44l-247.63-47a8,8,0,0,1-6.5-7.85V72.59c0-5.74,5.88-10.26,11.16-8L470.3,241.76A16,16,0,0,1,470.3,271.15Z"
                    style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                  />
                </svg>
              </button>
            </div>
            <li className="d-flex">
              <div className="news-icon me-3"></div>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormWizard;
