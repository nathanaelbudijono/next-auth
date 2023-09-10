import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import { ProtectedLayout } from "@/component/protected-layout";

type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};

export default function App({ Component, pageProps }: AppPropsWithAuth) {
  const { session } = pageProps;
  return (
    <SessionProvider session={session}>
      <main className="bg-zinc-800 text-white">
        {Component.requireAuth ? (
          <ProtectedLayout>
            <Component {...pageProps} />
          </ProtectedLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </SessionProvider>
  );
}
