import * as React from "react";

export default function Footer(props) {
  const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;
  const moreLinks = [
    { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
    {
      text: "Documentation",
      url: "https://gatsbyjs.com/docs/",
    },
    {
      text: "Starters",
      url: "https://gatsbyjs.com/starters/",
    },
    {
      text: "Showcase",
      url: "https://gatsbyjs.com/showcase/",
    },
    {
      text: "Contributing",
      url: "https://www.gatsbyjs.com/contributing/",
    },
    { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
  ];
  return (
    <footer
      style={{
        fontSize: `var(--font-sm)`,
        margin: `0 auto`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        backgroundColor: `orange`,
        padding: `var(--space-4) var(--size-gutter)`,
      }}
    >
      <p>
        {" "}
        more links: &nbsp;
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={`${link.url}${utmParameters}`}>{link.text}</a> &nbsp;
          </React.Fragment>
        ))}
      </p>
      <p>Infos: {props.siteDescription}</p>
      <p>
        Powered with <a href="https://www.gatsbyjs.com">Gatsby 5</a> {""}©
        {new Date().getFullYear()} &middot; {props.siteAuthor}
      </p>{" "}
    </footer>
  );
}
