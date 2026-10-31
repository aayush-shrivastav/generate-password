import React from "react";
import ReactDOM from "react-dom/client";
import PasswordGenerte from "./src/components/passwordGenerte";

const App = () => {
    return (
        <>
            <PasswordGenerte />

        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
