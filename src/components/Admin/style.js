import styled from "styled-components";

export const AdminComponent = styled.div`
  background-color: inherit;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  .form {
    padding-top: 50%;
  }
  .header {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    padding: 10px;
  }
`;

export const AdminPanelStyle = styled.div`
  height: 100vh;
  .ui.segment {
    border-radius: 0px;
    width: 100%;
    overflow-x: auto;
  }
  i.icon,
  i.icons {
    font-size: 1.4em;
  }
  .form-label,
  .gender label,
  .status label {
    padding: 10px 10px 10px 0px;
  }
  .ui.button {
    margin: 2px 2px 2px 0px;
    padding: 10px;
    font-size: 14px;
  }
`;

export const AdminReportsStyle = styled.div`
  background-color: inherit;
`;

export const AdminRequestsStyle = styled.div`
  background-color: inherit;
  .searchInput {
    display: inline-block;
  }
`;

export const AdminDirectionStyle = styled.div`
  background-color: inherit;
`;
