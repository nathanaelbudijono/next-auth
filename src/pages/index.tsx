import Layout from "@/component/layout";
import Navbar from "@/modules/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout className="flex justify-center items-center h-screen flex-col">
        <h1>Home page</h1>
        <p>
          you cant access{" "}
          <Link href="/dashboard" className="text-blue-700">
            dashboard
          </Link>
          , if you are not logged in.
        </p>
      </Layout>
    </main>
  );
}
