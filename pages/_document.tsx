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
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/jquery.min.js"></script>
          <script type="text/javascript" src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/modernizr.min.js"></script>
          <script type="text/javascript" src='http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/plugins.js'></script>
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjVoaCW3PAn52C7WPpJ7NBBqU1_TUfnSI" type="text/javascript"></script>
          <script type="text/javascript" src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/map-scripts.js"></script> */}

          <script type="text/javascript" src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/datepicker-script.js"></script>
          <script type="text/javascript" src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/style-customizer.js"></script>
          <script type="text/javascript" src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-2/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument