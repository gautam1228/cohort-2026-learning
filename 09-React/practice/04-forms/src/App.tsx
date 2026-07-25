import "./App.css";
import ManualForm from "./components/ManualForm";
import HookForm from "./components/HookForm";
import { useState } from "react";

function App() {
    const [tab, setTab] = useState<"Manual" | "ReactHookForm">("Manual");

    return (
        <div>
            <h1>Getting Started with Forms</h1>
            <div className="tab">
                <button
                    className="tab-button"
                    onClick={() => setTab("Manual")}
                    style={{ margin: 100 }}
                >
                    Manual Form
                </button>
                <button
                    className="tab-button"
                    onClick={() => setTab("ReactHookForm")}
                    style={{ margin: 100 }}
                >
                    React Hook Form
                </button>
            </div>
            {tab === "Manual" ? <ManualForm /> : <HookForm />}
        </div>
    );
}

export default App;
