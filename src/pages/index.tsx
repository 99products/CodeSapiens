import Image from "next/image";
import FileUpload from "../components/fileuploader";
import Header from "../components/header";
import { Space_Grotesk } from "next/font/google";
const inter = Space_Grotesk({ subsets: ["latin"] });

interface FileUploadProps {
  storagePath: string;
}

export default function Home() {
  return (
    // <div className="h-screen bg-gradient-radial">
    //   <main className="flex items-center justify-center h-screen flex-col">
    // <h2 className={`${inter.className} mb-3 text-5xl font-semibold`}>
    //   CodeSapiens
    // </h2>
    //     <p className={`${inter.className} mb-3 text-xl font-semibold`}>
    //       Explore. Evolve. Engineer.
    //     </p>

    //     <FileUpload/>
    //   </main>
    // </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('../assets/bg.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontWeight: 500,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            marginBottom: 20,
          }}
          className={`${inter.className}`}
        >
          {`Get Ready to Maximize Your Productivity With \n Our Workflow Solutions`}
        </span>
        <FileUpload />
      </div>
    </div>
  );
}
