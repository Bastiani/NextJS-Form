import Link from "next/link";
import { useRouter } from "next/router";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div>
      About us
      <Link href="/">
        <a>Index</a>
      </Link>
      <button onClick={() => router.push("/", undefined, { shallow: true })}>
        Index
      </button>
    </div>
  );
}
