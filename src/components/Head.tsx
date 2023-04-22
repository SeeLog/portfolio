import React from "react";

const Head: React.FC = () => {
  return (
    <>
      <title>seelog.me</title>
      <meta name="description" content="ろぐみ/Seelogのポートフォリオ的なサイト" />
      <meta name="keywords" content="ろぐみ,Seelog,ポートフォリオ,プログラミング" />
      <meta name="author" content="ろぐみ/SeeLog" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@seeloglog" />
      <meta name="twitter:creator" content="@seeloglog" />

      <meta property="og:title" content="seelog.me" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://seelog.me" />
      <meta property="og:image" content="https://seelog.me/ogp_icon.png" />
      <meta property="og:image:alt" content="seelog.me" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="seelog.me" />
    </>
  );
};

export { Head };
