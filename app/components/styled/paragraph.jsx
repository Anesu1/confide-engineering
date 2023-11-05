import { avenirNext } from "@/app/font/font"

export default function Paragraph({children}) {
  return (
    <p className={`${avenirNext.className} text-md text-gray-800`}>
      {children}
    </p>
  )
}
