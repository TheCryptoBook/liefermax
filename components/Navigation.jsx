import Link from "next/link"
import Image from "next/image"
import {Badge} from 'react-bootstrap'
import { useSelector } from "react-redux"

export default function Navigation() {
  const wAnzahl = useSelector((state) => state.warenkorb.wAnzahl);
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-danger">
        <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
                <Image src={'/images/logo.png'} alt='Logo' width={180} height={75} />
            </Link>
            <Link href="/warenkorb">
                <Image src={'/images/warenkorb.png'} alt='warenkorb' width={30} height={30} />
                {wAnzahl > 0 ? <Badge pill bg="success" style={{
                  position: "absolute",
                  right: "25px",
                  top: "25px"
                }}>{wAnzahl}</Badge> : null}
            </Link>
        </div>
    </div>
  )
}