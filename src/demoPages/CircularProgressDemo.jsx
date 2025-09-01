import React, { useState, useEffect } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import "./circularProgressDemo.scss";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

export const BasicLoaderDemo = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppProvider>
      <div className="circular-progress-demo-container">
        <div className="demo-section">
          <h3 className="demo-title">Basic Toggle</h3>
          <div className="demo-content">
            <div className="control-row">
              <button onClick={() => setOpen(true)}>Show Loader</button>
              <button onClick={() => setOpen(false)}>Hide Loader</button>
            </div>
            {open && <CircularProgressBar />}
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export const AutoHideLoaderDemo = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => setLoading(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const runTask = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <AppProvider>
      <div className="circular-progress-demo-container">
        <div className="demo-section">
          <h3 className="demo-title">Auto-hide After Task</h3>
          <div className="demo-content">
            <div className="control-row">
              <button onClick={runTask}>Run Task</button>
            </div>
            {loading && <CircularProgressBar />}
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export const BlockingActionDemo = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => setLoading(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = async () => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppProvider>
      <div className="circular-progress-demo-container">
        <div className="demo-section">
          <h3 className="demo-title">Blocking UI During Action</h3>
          <div className="demo-content">
            <div className="control-row">
              <button onClick={submit} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
            {loading && <CircularProgressBar />}
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

const CircularProgressDemo = () => {
  return (
    <div className="circular-progress-demo-container">
      <BasicLoaderDemo />
      <AutoHideLoaderDemo />
      <BlockingActionDemo />
    </div>
  );
};

export default CircularProgressDemo;
