/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { API_ENDPOINT } from "../../api";
import { ErrorBoundaryProvider } from "../../api/useErrorBoundary";
import ErrorBoundary from "../../ErrorBoundary";
import { Comments } from "./Comments";

export function UseDemo() {
  const commentsPromise = fetch(`${API_ENDPOINT}/photos`);

  return (
    <ErrorBoundaryProvider>
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Comments commentsPromise={commentsPromise} />
        </Suspense>
      </ErrorBoundary>
    </ErrorBoundaryProvider>
  );
}
