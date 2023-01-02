import Head from "next/head";
import * as S from "./styles";
import Menu from "./components/Menu";

const DefaultLayout = ({
  children = <></>,
  headParams = {
    title: "Data Safety",
    description: "Nossa prioridade é a sua proteção digital",
  },
}) => {
  return (
    <>
      <Head>
        <title>{headParams.title}</title>
        <meta name="description" content={headParams.description} />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="data safety,ti,tecnologia da informação,tecnologia,segurança de dados,segurança"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <S.Container>
        <S.TopContent>
          <header>
            <Menu />
          </header>
          <main>{children}</main>
        </S.TopContent>
        <footer>footer</footer>
      </S.Container>
    </>
  );
};

export default DefaultLayout;
