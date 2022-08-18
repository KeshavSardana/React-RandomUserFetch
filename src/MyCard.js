import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card className="text-center">
      <CardBody>
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h2 className="my-1">
            {" "}
            <span>{details.name?.title}</span>
            <span className="px-2">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h2>
        </CardTitle>
        <CardText className="text-right my-4">
          <h5>
            <FaMapMarkedAlt className="mx-3" />{" "}
            <span className="text-success ">{details.location?.country}</span>
          </h5>

          <h5>
            <FaPhone className="mx-3" />{" "}
            <span className="text-success ">{details.phone}</span>
          </h5>
          <h5>
            <FaEnvelope className="mx-3" />{" "}
            <span className="text-success ">{details.email}</span>
          </h5>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
