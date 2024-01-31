"use client";

import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

const DefaultError = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>oops</h1>
      <h2>It seems like something went wrong...</h2>
      <button
        style={{ color: "black" }}
        onClick={() => (window.location.href = "/")}
      >
        Head home
      </button>
    </div>
  );
};

const ErrorBoundary = ({ children }: Props) => {
  return (
    <ReactErrorBoundary FallbackComponent={DefaultError}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
