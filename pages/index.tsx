import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import FileUpload from '../components/fileuploader'
const inter = Space_Grotesk({ subsets: ['latin'] })


interface FileUploadProps {
  storagePath: string;
}

export default function Home() {


  return (
    <div className="h-screen bg-gradient-radial">
      <main className="flex items-center justify-center h-screen flex-col">
        <h2 className={`${inter.className} mb-3 text-5xl font-semibold`}>
          CodeSapiens
        </h2>
        <p className={`${inter.className} mb-3 text-xl font-semibold`}>
          Explore. Evolve. Engineer.
        </p>
       
        <FileUpload/>
      </main>
    </div>
  )
}
