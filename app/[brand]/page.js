import Link from "next/link";
import getBasePath from "../lib/getBasePath";

export default function Page({ params: { brand } }) {
  return (
    <div>
      <h2>Hello {brand}, Home page!</h2>

      <Link href={`${getBasePath(brand)}/desktop/step/dados-pessoais`}>
        <button>Open Account</button>
      </Link>
    </div>
  );
}
