import React from "react";
import { Space_Grotesk } from "next/font/google";
const inter = Space_Grotesk({ subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        padding: "10px 0px 5px 10px",
      }}
    >
      <img
        style={{ width: 40, height: 40, padding: 5, borderRadius: 10 }}
        src={"../assets/brand_icon.png"}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{ fontWeight: 700, fontSize: 20 }}
          className={`${inter.className}`}
        >
          Code Sapiens
        </span>
        <span style={{ fontSize: 14 }} className={`${inter.className}`}>
          Explore, Empower, Engineer
        </span>
      </div>
    </div>
  );
};

export default Header;
