import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
const layout = ({ children, description, title }) => {
  return (
    <div className="relative text-black dark:text-white">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
      </Head>

      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:[background:radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.4),rgba(255,0,0,0.6))]"
      ></div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default layout;
