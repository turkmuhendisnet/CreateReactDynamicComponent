import React, { useMemo } from "react";
import PropTypes from "prop-types";

import {
  TextField,
  Grid,
  Button,
  Stack,
  Autocomplete,
  MenuItem,
  Typography,
  Card,
  Link,
  Box
} from "@mui/material";
import MainCard from "../ui-component/MainCard";
import SubCard from "../ui-component/SubCard";
import NumberFormat from "react-number-format";
import AnimateButton from "../ui-component/extended/AnimateButton";

const TypeMap = {
  AnimateButton,
  MainCard,
  SubCard,
  Grid,
  TextField,
  NumberFormat,
  Typography,
  Button,
  Stack,
  Link,
  Autocomplete,
  MenuItem,
  Card,
  Box
};

let errorsPropertyList = [];

const checkValidation = (component, value, errorsPropertyList) => {
  const reg = new RegExp(component.props?.inputProps?.dataregex);

  if (
    (!!component.props.required &&
      !value[component.props.id] &&
      component.props.defaultValue === "") ||
    (!!component.props.inputProps?.dataregex &&
      !!value[component.props.id] &&
      !reg.test(value[component.props.id]))
  ) {
    if (!errorsPropertyList.includes(component.props.id))
      errorsPropertyList.push(component.props.id);
  } else if (errorsPropertyList.includes(component.props.id)) {
    errorsPropertyList = errorsPropertyList.filter(
      (ele) => ele !== component.props?.id
    );
  }

  if (errorsPropertyList.includes(component.props.id))
    component.props.error = true;
  else component.props.error = false;
};

function createComponent(componentInfo, componentValue, event) {
  if (typeof TypeMap[componentInfo.type] === "undefined") {
    return (
      <Typography variant="caption" color="error">
        İlgili component {componentInfo.type} oluşturulamadı.
      </Typography>
    );
  }

  // TextField select varsa ve childları tanımlıysa o MenuItem'dır zaten içinde tanımlı
  if (!componentInfo.props?.select && !componentInfo?.child) {
    componentInfo.props.value =
      componentInfo.props?.id in componentValue
        ? componentValue[componentInfo.props?.id]
        : componentInfo.props.defaultValue;
  }

  if (
    componentInfo.props?.component &&
    typeof TypeMap[componentInfo.props.component] !== "undefined"
  ) {
    componentInfo.props.component = TypeMap[componentInfo.props.component];
  }

  // Number Format için ve customInput olan componentler için yapıldı
  if (
    componentInfo.props?.customInput &&
    typeof TypeMap[componentInfo.props.customInput] !== "undefined"
  ) {
    componentInfo.props.value =
      componentInfo.props?.id in componentValue
        ? componentValue[componentInfo.props?.id]
        : "";
    componentInfo.props.customInput = TypeMap[componentInfo.props.customInput];
  }

  // Multi select SelectProps için yapıldı
  if (componentInfo.props?.SelectProps) {
    componentInfo.props.SelectProps.value =
      componentInfo.props?.id in componentValue
        ? componentValue[componentInfo.props?.id]
        : componentInfo.props.defaultValue;
    componentInfo.props.SelectProps.multiple = true;
  }

  checkValidation(componentInfo, componentValue, errorsPropertyList);

  if (componentInfo.props?.onChange === true) {
    componentInfo.props.onChange = event.onChange;
  }

  if (componentInfo.props?.SelectProps?.onChange) {
    componentInfo.props.SelectProps.onChange = event.onChange;
  }

  if (componentInfo.type === "CustomTextScript") {
    componentInfo.props.customerData = componentValue;
  }

  return React.createElement(
    TypeMap[componentInfo.type],
    componentInfo.props,
    componentInfo.child &&
      (typeof componentInfo.child === "string"
        ? componentInfo.child
        : componentInfo.child.map((component) =>
            createComponent(component, componentValue, event)
          ))
  );
}

function DynamicFormComponent({ componentInfo, componentValue, event }) {
  const memoizedComponent = useMemo(
    () => createComponent(componentInfo, componentValue, event),
    [componentInfo, componentValue, event]
  );

  return memoizedComponent;
}
DynamicFormComponent.propTypes = {
  componentInfo: PropTypes.object.isRequired,
  componentValue: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

export default DynamicFormComponent;
