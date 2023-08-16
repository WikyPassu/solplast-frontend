import "@/styles/globals.css";
import { StatesContextProvider } from "@/components/StatesContext";
import Navigation from "@/components/Navigation";

const RootLayout = ({children}) => {
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="/estrellita.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
        <StatesContextProvider>
          <Navigation />
          {children}
        </StatesContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;