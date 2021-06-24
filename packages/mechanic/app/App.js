import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import { extractContexts } from "../src";

import { Function } from "./pages/Function";
import { NotFound } from "./pages/NotFound";
import { Nav } from "./pages/Nav";

import functions from "./FUNCTIONS";

// console.log(path.resolve(process.cwd(), "./functions/index.js"));

// const functionContext = require.context("../functions", true, /^(.{2,})\/index\.js$/);
// const { functions } = extractContexts(functionContext);
// const functionNames = Object.keys(functions);
// const functions = {};
// const functionNames = [];

import css from "./App.css";

const AppComponent = props => {
  console.log({ functions });
  return (
    <div className={css.root}>
      <Switch>
        {/* {functionNames.map((name, i) => (
          <Route
            exact
            key={`route-${name}`}
            path={i == 0 ? ["/", `/${name}`] : `/${name}`}
            render={() => (
              <Function name={name} exports={functions[name]}>
                <Nav name={name} functionsNames={functionNames} />
              </Function>
            )}
          />
        ))} */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export const App = withRouter(AppComponent);
