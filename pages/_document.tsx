import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
    
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hello! My name is Chhouk Tit Panhara. I am a web designer and developer, and I'm very passionate and dedicated to my work. With 4 years experience as a web designer and development, I have acquired the skills and knowledge necessary to make your project a success." />
        <meta property="og:url"                content="http://panhara.work/" />
        <meta property="og:type"               content="portfolio" />
        <meta property="og:title"              content="Home Page" />
        <meta property="og:description"        content="Hello, My name's Chhouk Tit Panhara. I am a web designer and developer, and I'm very passionate and dedicated to my work. With 4 years experience as a web designer and development, I have acquired the skills and knowledge necessary to make your project a success." />
        <meta property="og:image"              content="https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/p720x720/73114475_105338404233994_6001355547842969600_o.jpg?_nc_cat=109&_nc_eui2=AeF48_B9hAUuk9naPp_bNRVcrdMnv_hFFtsTQxqyGVL_CkxQIBvdCCobRUAT8CKHJm2hU6DWYMv_Gz-ft5vlFF5fFL8b-7G9mO8fgjwYo6rkmQ&_nc_ohc=LNQGcpdwYJcAX9_GUoQ&_nc_ht=scontent.fpnh10-1.fna&_nc_tp=6&oh=9eba2c45911c28095791635800c3525a&oe=5E986A4E" />
        <link rel="icon" type="image/png" href="images/favicon.png" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/et-lineicons.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/flexslider.css" />
        <link rel="stylesheet" href="/css/style.css" />

        </Head>
        <body data-spy="scroll" data-target=".navbar" data-offset="50">
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument;
