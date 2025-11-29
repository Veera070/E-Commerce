
import './globals.css';
export const metadata = {
  title: "My Product",
  description: "A clean modern landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
