import Document, { Html, Head, Main, NextScript } from 'next/document'
import $ from 'jquery';
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
        <meta name="description" content="Hello! My name is Chhouk Tit Panhara. I am a web designer and developer, and I'm very passionate and dedicated to my work. With 4 years experience as a web designer and development, I have acquired the skills and knowledge necessary to make your project a success.">
        <link rel="icon" type="image/png" href="images/favicon.png" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/et-lineicons.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/flexslider.css" />
        <link rel="stylesheet" href="/css/style.css" />

        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument