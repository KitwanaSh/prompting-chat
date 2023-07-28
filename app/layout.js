import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

 export const metadata = {
    title: "Prompting",
    description: "Descover & Share Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body lang="en">
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout