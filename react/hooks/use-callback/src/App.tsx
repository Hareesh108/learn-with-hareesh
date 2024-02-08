import DonotSkipRender from "./render-without-useCallback-and-memo/DonotSkipRender.tsx";
import SkipRender from "./skip-render-useCallback-and-memo/SkipRender.tsx";

export default function App() {
  return (
    <>
      <SkipRender />
      <DonotSkipRender/>
    </>
  );
}
