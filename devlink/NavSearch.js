import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavSearch.module.css";

export function NavSearch({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      id={_utils.cx(
        _styles,
        "w-node-_14b4bb94-839c-c3a9-a363-c2d50b5c10ff-0b5c10ff"
      )}
      tag="div"
    >
      <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "form")}
          name="email-form"
          data-name="Email Form"
          method="get"
          id="email-form"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input")}
            autoFocus={false}
            maxLength={256}
            name="name-2"
            data-name="Name 2"
            placeholder='Search by pressing "/"'
            type="text"
            disabled={false}
            required={false}
            id="name-2"
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
