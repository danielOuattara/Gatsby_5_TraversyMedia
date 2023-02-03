import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function About() {
  return (
    <Layout>
      <h1>About us</h1>
      <p>
        Ut excepteur in ipsum consectetur veniam cupidatat Lorem laboris qui.
        Ipsum commodo pariatur aliquip sit anim eiusmod voluptate laboris aute
        qui et. Lorem non irure culpa aliquip id. Velit amet sit adipisicing
      </p>{" "}
      <p>
        {" "}
        Aliquip pariatur elit ullamco ullamco est proident laboris Lorem minim
        pariatur sint laborum. Minim sunt minim aute ex adipisicing qui
        incididunt aliqua velit ipsum incididunt minim.
      </p>
    </Layout>
  );
}

export const Head = () => <Seo title="About page" />;
