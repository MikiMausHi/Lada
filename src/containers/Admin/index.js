import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "../../components/Common/Header";

/**
 * Admin
 */
export default function Admin() {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Switch>
          <Route path="*" component={Dashboard} />
        </Switch>
      </main>
    </>
  );
}
