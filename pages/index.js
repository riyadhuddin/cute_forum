/* pages/index.js */
import Head from "next/head";
import {withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useEffect } from "react";
import { Auth } from "aws-amplify";
function Home() {
  useEffect(() => {
    checkUser();
  }),
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user.attributes:", user.attributes);
  }

  return (
    <div>
      <Head>
        <title>
          Cute Forum</title>
        <link
          rel="icon"
          href="data\:image/svg+xml,<svg
xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text
y=%22.9em%22 font-size=%2290%22>🐕</text></svg>"
        />
      </Head>

      <div className="container mx-auto">
        <main className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm\:py-24 sm\:px-6
lg\:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900
sm\:text-5xl sm\:tracking-tight lg\:text-6xl">
                Cute Forum
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl
text-gray-500">
                Welcome to Cute Forum
              </p>
            </div>
          </div>
        </main>
        <AmplifySignOut />;
      </div>

      <footer></footer>
    </div>
  );
}

export default withAuthenticator(Home);
