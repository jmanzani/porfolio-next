import "@/styles/globals.css";
import onest from "@fontsource-variable/onest"

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${onest};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
