import { useEffect } from "react";

const AppLayout = ({ children }) => {
  useEffect(() => {
    const handleMove = (e) => {
      const glow = document.getElementById("cursorGlow");
      if (!glow) return;

      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden selection:bg-amber-400 selection:text-black">
      <div
        id="cursorGlow"
        className="pointer-events-none fixed z-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AppLayout;
