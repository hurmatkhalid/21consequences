import "../styles/globals.css";
import Header from "./Header";
import SideNavbar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <SideNavbar />
        {children}
      </body>
    </html>
  );
}
