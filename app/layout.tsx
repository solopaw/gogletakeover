import '../styles/globals.css'; // Import global styles
export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app using the App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Add your global layout components here, e.g., header, footer */}
        {children}
      </body>
    </html>
  );
}
