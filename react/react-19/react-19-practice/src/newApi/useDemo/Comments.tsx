/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use } from "react";

export function Comments({ commentsPromise }: any) {
  const comments = use(commentsPromise);
  console.log(comments, "comments");

  return <>{comments}</>;
}
