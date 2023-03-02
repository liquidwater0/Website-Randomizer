import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./Popup";

const root = createRoot(document.querySelector("#popup") as HTMLDivElement);
root.render(<Popup />);