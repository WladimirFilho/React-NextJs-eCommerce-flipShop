import "./loader.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center flex-col h-[80vh]">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}
