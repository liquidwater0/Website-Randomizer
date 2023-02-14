import React from "react";
import { createRoot } from "react-dom/client";
import Options from "./Options";

const root = createRoot(document.querySelector("#options"));
root.render(<Options />);