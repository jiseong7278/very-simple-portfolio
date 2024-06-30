import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "최지성 | App & Back-End Dev",
  description: "안녕하세요, 앱 및 백엔드 개발자 최지성입니다.",
  canonical: "https://takemeh0me.tistory.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://takemeh0me.tistory.com/",
    title: "최지성 | App & Back-End Dev",
    site_name: "최지성 | App & Back-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "최지성 | App & Back-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "최지성 | App & Back-End Dev",
      content: "최지성 | App & Back-End Dev",
    },
    {
      name: "최지성 | App & Back-End Dev",
      content: "최지성 | App & Back-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
