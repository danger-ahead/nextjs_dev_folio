import Head from "next/head";
import type { JSX } from "react";

function NearbyChat(): JSX.Element {
  return (
    <>
      <Head>
        <title>Nearby Chat</title>
        <meta
          name="description"
          content={`A Flutter Application that allows users to chat with nearby users in the same Wi-Fi or Hotspot network.`}
        />
        <meta property="og:title" content={`Nearby Chat`} />
        <meta
          property="og:description"
          content={`A Flutter Application that allows users to chat with nearby users in the same Wi-Fi or Hotspot network.`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/projects/nearby_chat/privacy-policy`}
        />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="primary-font-color margin-left margin-right">
        <h1>Privacy Policy</h1>

        <h2>Introduction</h2>
        <p>
          This privacy policy sets out how FLOATING POINT uses and protects any
          information that you give us when you use this app.
        </p>
        <p>
          FLOATING POINT is committed to ensuring that your privacy is
          protected. Should we ask you to provide certain information by which
          you can be identified when using this app, you can be assured that it
          will only be used in accordance with this privacy statement.
        </p>

        <h2>Data Collection</h2>
        <p>This app does not collect any personal data from its users.</p>

        <h2>Safe for Kids</h2>
        <p>
          This app is safe for kids to use. We do not collect any personal data
          from our users, and we do not include any content that is
          inappropriate for children.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties any
          information that we collect through this app.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          This app does not use any third-party services that collect data from
          its users.
        </p>

        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. You should check
          this page periodically to ensure that you are happy with any changes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us at{" "}
          <a href="mailto:danger.ahead@pm.me" target="_blank" rel="noreferrer">
            danger.ahead@pm.me
          </a>
          .
        </p>
      </main>
    </>
  );
}

export default NearbyChat;
