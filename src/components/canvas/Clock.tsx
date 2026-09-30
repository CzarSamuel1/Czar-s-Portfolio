"use client";

import { useEffect, useState } from "react";

/** Live Lagos time (WAT). Renders empty on the server to avoid hydration drift. */
export function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="mono h-5 text-sm tracking-[0.25em]" aria-label="Current time in Lagos">
      {time} <span className="text-[#8b8780]">WAT</span>
    </p>
  );
}
