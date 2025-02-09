import React from "react";
import "/styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}