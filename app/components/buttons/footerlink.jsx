import Link from "next/link";


export default function FooterLink({label, pageLink}) {
  return (
    <Link href={pageLink} className="block p-2 pl-0 text-sm font-extralight">
      {label}
    </Link>
  )
}
