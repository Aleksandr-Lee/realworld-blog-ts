import React from "react";
import { Alert } from "antd";
import "antd/dist/antd.css";
import "./ErrorIndicator.scss";

const ErrorIndicator: React.FC = () => (
  <Alert message="Error reload the page." type="error" />
);

export default ErrorIndicator;
