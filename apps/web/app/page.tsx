import Uploader from "../components/Uploader";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className ?? ""}`}
    />
  );
}

export default function Page() {
  return (
    <main className=" ">
      {/* <Chat /> */}
      <Uploader />
    </main>
  );
}
