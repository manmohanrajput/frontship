import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import "../../css/shippment.css";
import '../../css/transfermoneytodriver.css'
import axios from "axios";
import { Nav, NavItem, Form, Button, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

function TransferMoneyToDriver() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  
  const [error, setError] = useState(false);
  const [modalPrivacy, setModalPrivacy] = useState(false);
  const [succbtn, setSuccbtn] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name,
      email,
      phone,
      password,
      //   date:fullDate,
    };

    if (
      name.length == 0 ||
      email.length == 0 ||
      phone.length == 10 ||
      password.length == 0
    ) {
      setError(true);
      setSuccbtn(
        <span className="" style={{ color: "green" }}>
          Submit Succesfully
        </span>
      );
    }
    if (name&&email&&phone&&password) {
      fetch(
           "https://shippment-dfx.onrender.com/api/addispatcher",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res, dataToSubmit);
        });
    } else {
      setSuccbtn(
        <span className="" style={{ color: "red" }}>
          Please fill all the field
        </span>
      );
    }
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} className="modal_body modal-form-body">
        <div className="card">
          <div className="">
            <div className="admin-dashboard">
              <div className="title-header">
                <h5 className="card-header-01 text-center">Transfer money to Driver</h5>
                <ModalBody className="close-icon">
                  <AiOutlineClose
                    className="main_AiOutlineClose"
                    onClick={() => setModalIsOpen(false)}
                    color="rgba(27, 38, 68, 1)"
                  />
                </ModalBody>
              </div>
              <div className="row card-holder">
                <form className="form-control-holder"  onSubmit={handleSubmit} >
                    
                  <div className="d-flex Transfer-form">
                  <div className="mb-4">
                    <label for="exampleInputEmail1" className="form-label">
                    Driver Name<span className="stra-icon">*</span>
                    </label>
                    <input
                      name="full_name"   
                      onChange={(e)=> setName(e.target.value)}          
                      id="first_name"
                      placeholder="Enter Name"
                      type="text"
                    />
               {error && name.length<=0?<span className="valid-form" style={{color:'red'}}>Please Enter full name*</span>:""}
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                    Shipment ID<span className="stra-icon">*</span>
                    </label>
                    <input
                       name="phone"   
                       onChange={(e)=> setPhone(e.target.value)}          
                       id="phone"
                       placeholder="Enter Shipment ID"
                       type="number"
                    />
                     {error && phone.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter the 10 Digit number*</span>:""}

                  </div>
                  </div>

                  <div className="mb-4 w-50 Transfer-form ">
                    <label className="form-label">
                    Transfer Amount<span className="stra-icon">*</span>
                    </label>
                    <input
                       name="phone"   
                       onChange={(e)=> setPhone(e.target.value)}          
                       id="phone"
                       placeholder="Enter Amount"
                       type="number"
                    />
                     {error && phone.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter the 10 Digit number*</span>:""}

                  </div>
                  <button type="submit" className="submit-btn"  value="Send Message">
                  Transfer Amount
                  </button>
                  <div className="succbtn mb-4" >{succbtn ? <p>{succbtn}</p> : null}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="d-flex shipment-bnt">
          <button type="submit" onClick={() => setModalIsOpen(true)}>
            Transfer money to Driver
          </button>
      </div>
    </div>
  );
}

export default TransferMoneyToDriver;
