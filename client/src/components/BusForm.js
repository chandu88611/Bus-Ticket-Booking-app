import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
// import { axiosInstance } from "../helpers/axiosInstance";
import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { hideLoading,showLoading } from "../redux/AlertSlice";
// import moment from "moment";
import axios from "axios"

function BusForm({
  showBusForm,
  setShowBusForm,
  type ,
  getData,
  selectedBus,
  setSelectedBus,
}) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log(values)
    try {
      dispatch(showLoading());
      let response = null;
      if (type){
        response = await axios.post("http://localhost:5000/buses/add-bus", values,
        {headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }}
          
          );

          if(response.data.success){
            message.success(response.data.message);
            dispatch(hideLoading())
            window.location.reload()
          }
      } 
    else {
        response = await axios.post("http://localhost:5000/buses/update-bus", {
          ...values,
          _id:selectedBus._id,
        },   {headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }});}

      
      if (response.data.success) {
        message.success(response.data.message);
        window.location.reload()
      } else {
        message.error(response.data.message);
      }
      // getData();
      // setShowBusForm(false);
      // setSelectedBus(null);

      dispatch(hideLoading());
    } 
    catch (error) {
      message.error(error.message);
      dispatch(hideLoading());
    }
  };
  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Bus" : "Update Bus"}
      visible={showBusForm}
      onCancel={() => {
        // setSelectedBus(null);
        setShowBusForm(false);
      }}
      footer={false}
      style={{padding:'20px'}}
    >
      <Form layout="vertical" onFinish={onFinish} style={{padding:'10px',background:"rgb(131,34,54,0.1)",borderRadius:'5px'}} > 
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item label="Bus Name" name="name">
              <input type="text"  style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Bus Number" name="number">
              <input type="text"  style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Capacity" name="capacity">
              <input type="text"  style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Form.Item label="From" name="from">
              <input type="text"  style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="To" name="to">
              <input type="text"  style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>

          <Col lg={8} xs={24}>
            <Form.Item label="Journey Date" name="journeyDate">
              <input type="date" style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <Form.Item label="Departure" name="departure">
              <input type="time"style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <Form.Item label="Arrival" name="arrival">
              <input type="time" style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Form.Item label="Type" name="type">
              <select name="" id="" style={{width:"100%",height:"35px",background:'white'}}>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Fare" name="fare">
              <input type="text" style={{width:"100%",height:"35px",background:'white',borderRadius:"5px"}}/>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Form.Item label="Status" name="status">
              <select name="" id="" style={{width:"100%",height:"35px",background:'white'}}>
                <option value="Yet To Start">Yet To Start</option>
                <option value="Running">Running</option>
                <option value="Completed">Completed</option>
              </select>
            </Form.Item>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <button className="primary-btn" type="submit">
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default BusForm;