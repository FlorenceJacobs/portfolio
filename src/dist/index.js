"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
require("materialize-css/dist/css/materialize.min.css");
var react_router_dom_1 = require("react-router-dom");
react_dom_1["default"].render(<react_router_dom_1.BrowserRouter>
    <App_1["default"] />
    </react_router_dom_1.BrowserRouter>, document.getElementById('root'));
