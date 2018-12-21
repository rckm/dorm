import React from "react";

const API = React.createContext(null);

export const withAPI = WrappedComponent => props => {
  return (
    <API.Consumer>
      {api => <WrappedComponent {...props} api={api} />}
    </API.Consumer>
  );
};

export default API;
