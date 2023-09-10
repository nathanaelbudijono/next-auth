import Layout from "@/component/layout";
import Navbar from "@/modules/navbar";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar />
      <Layout className="flex justify-center items-center h-screen flex-col">
        <h1>Dashboard page</h1>
        <p>Welcome, {session?.user?.name}</p>
      </Layout>
    </div>
  );
}

Dashboard.requireAuth = true;
