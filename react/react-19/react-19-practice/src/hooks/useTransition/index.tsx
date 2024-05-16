import { useState, useTransition } from "react";
import { API_ENDPOINT } from "../../api";
import Spinner from "../../Spinner";

export function GetTheResponse() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const res = await fetch(`${API_ENDPOINT}/photos`);
      console.log(res, "res");

      const json = await res.json();
      console.log(json, "json");

      if (res.ok) {
        setData(json);
      } else {
        setError(json?.error);
      }
    });
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={isPending}>
        Fetch Data
      </button>
      {error && <p>{error}</p>}

      {isPending ? (
        <Spinner />
      ) : (
        <>
          {data?.map((item: { id: number; title: string }) => (
            <ol key={item?.id}>{item?.title}</ol>
          ))}
        </>
      )}
    </div>
  );
}
