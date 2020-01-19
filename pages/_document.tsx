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
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/themify-icons.css" rel="stylesheet" type="text/css" />
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/magnific-popup.css" rel="stylesheet" type="text/css" />
          <link href='http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/jquery-ui.css' type="text/css" rel='stylesheet' />
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/style.css" rel="stylesheet" type="text/css" />
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/responsive.css" rel="stylesheet" type="text/css" />
          <link href="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/css/style-customizer.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script type="text/javascript" src="js/jquery.js"></script>

          <script type="text/javascript" src="js/minizer.js"></script>

          <script type="text/javascript" src='js/plugin.js'></script>

          <script src="js/googleapi.js" type="text/javascript"></script>
          <script type="text/javascript" src="js/mapscript.js"></script>

          <script type="text/javascript" src="js/customizer.js"></script>

          <script type="text/javascript" src="js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;