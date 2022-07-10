import { top_3000 } from "./words_3000";

export default function English() {
  const words = top_3000;

  return (
    <div className="English">
      <h1
        style={{
          color: "pink",
          fontSize: "46px",
          backgroundColor: "gre",
        }}
      >
        English
      </h1>
    </div>
  );
}
