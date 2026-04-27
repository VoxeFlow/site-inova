import { Montserrat } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { ChatProvider } from "@/context/ChatContext";
import { SITE_URL } from "@/lib/seo";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Clínica Inova | Dentista em Betim",
  description: "Clínica Inova em Betim: implante dentário, alinhadores invisíveis, clareamento dental e atendimento odontológico particular com mais critério.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={montserrat.className}>
        <UserProvider>
          <ChatProvider>
            {children}
          </ChatProvider>
        </UserProvider>
      </body>
    </html>
  );
}
