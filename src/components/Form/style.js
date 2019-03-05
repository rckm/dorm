import styled from "styled-components";

export const FormStyle = styled.div`
  color: #000000;
  .title {
    font-size: 42px;
    text-transform: uppercase;
    text-align: center;
    padding: 30px;
    border-bottom: 5px solid #ffffff;
  }
  .ui.grid > .row {
    padding-bottom: 0px;
  }
  .form-label,
  .gender label {
    padding: 10px 10px 10px 0px;
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
  /* .ui.segment {
    background: #e1e1e1;
  } */
`;
