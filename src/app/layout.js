import React from "react";
import "/styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#020617"/>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}