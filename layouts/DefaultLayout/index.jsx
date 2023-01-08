import Head from "next/head";
import * as S from "./styles";
import Menu from "./components/Menu";
import { defaultHeadParams } from "../../constants/defaultHeadParams";

const DefaultLayout = ({
  children = <></>,
  headParams = defaultHeadParams,
}) => {
  return (
    <>
      <Head>
        <title>Data Safety</title>

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="title" content={headParams.title} />
        <meta name="description" content={headParams.description} />
        <meta name="keywords" content={headParams.keywords} />

        <link rel="canonical" href={headParams.url} />
        <link rel="shortcut icon" href="/favicon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={headParams.url} />
        <meta property="og:title" content={headParams.title} />
        <meta property="og:description" content={headParams.description} />
        <meta property="og:image" content="/brand-lg.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={headParams.url} />
        <meta property="twitter:title" content={headParams.title} />
        <meta property="twitter:description" content={headParams.description} />
        <meta property="twitter:image" content="/brand-lg.png" />
      </Head>
      <S.Container>
        <S.TopContent>
          <S.Header>
            <Menu />
          </S.Header>
          <S.Main>{children}</S.Main>
        </S.TopContent>
        <footer>footer</footer>
      </S.Container>
    </>
  );
};

export default DefaultLayout;
