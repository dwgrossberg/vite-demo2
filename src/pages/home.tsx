/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const home = () => {
  return (
    <div
      className="homepage"
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      <h1>Hello, my name is Daniel</h1>
      <h2
        css={css`
          font-size: 25px;
        `}
      >
        and I'm a Fullstack Software Engineer
      </h2>
      {/* who loves to work with scroll */}
      <h4>
        Get in touch:{" "}
        <a href={"mailto:me@danielgrossberg.com"}>me@danielgrossberg.com</a>
      </h4>
    </div>
  );
};
export default home;
