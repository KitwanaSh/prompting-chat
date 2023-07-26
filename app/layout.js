import "@styles/globals.css";
import { Children } from "react";

 export const metadata = {
    title: "Prompting",
    description: "Descover & Share Prompts"
}

const RootLayout = () => {
  return (
    <html>
        <body lang="en">
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout