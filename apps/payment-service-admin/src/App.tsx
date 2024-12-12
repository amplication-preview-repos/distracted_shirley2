import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DepositList } from "./deposit/DepositList";
import { DepositCreate } from "./deposit/DepositCreate";
import { DepositEdit } from "./deposit/DepositEdit";
import { DepositShow } from "./deposit/DepositShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PaymentService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Deposit"
          list={DepositList}
          edit={DepositEdit}
          create={DepositCreate}
          show={DepositShow}
        />
      </Admin>
    </div>
  );
};

export default App;
