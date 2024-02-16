import { Footer } from "./footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
