import styled from "styled-components";

export const FormStyle = styled.div`
  height: 100%;
  .auth-btn {
    margin-top: 58px !important;
    position: absolute !important;
    z-index: 999 !important;
  }
  .title {
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 42px;
    text-transform: uppercase;
    text-align: center;
    padding: 30px;
  }
  .form-label {
    font-weight: 500;
    font-size: 18px;
  }
  .form-label,
  .gender label {
    padding: 15px 10px 15px 0px;
    font-family: "Roboto", sans-serif;
  }
  .ui.segment {
    /* padding: 4rem 2rem 2rem 2rem; */
    border: 0px;
    box-shadow: none;
    height: 100%;
  }
  .button {
    margin: 10px 10px 10px 0px;
    padding: 15px;
  }
  .ui.raised.segment,
  .ui.raised.segments {
    box-shadow: 0 10px 14px 0 rgba(34, 36, 38, 0.5),
      0 2px 10px 0 rgba(34, 36, 38, 0.15);
  }
  .ui.primary.button,
  .ui.primary.buttons .button {
    padding: 15px;
  }

  .firstCol {
    width: 100%;
    margin: 0 auto;
  }

  .questionnaire {
    font-size: 36px;
  }
`;
