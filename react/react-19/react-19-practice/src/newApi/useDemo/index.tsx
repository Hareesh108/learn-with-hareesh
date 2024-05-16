/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, use } from "react";

function Comments({ commentsPromise }) {

  // `use` will suspend until the promise resolves.
  const comments = use(commentsPromise);
  return comments.map((comment) => <p key={comment.id}>{comment}</p>);
}

export function UseDemo({ commentsPromise }: any) {
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
