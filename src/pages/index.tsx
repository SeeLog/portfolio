import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Global } from "@emotion/react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { globalStyles } from "../styles/global";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
