import Head from 'next/head';

type Props = {
  title?: string;
};

function HeadBoy({ title }: Props) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tinder For Cats{title ? ` | ${title}` : null}</title>
    </Head>
  );
}

export default HeadBoy;
