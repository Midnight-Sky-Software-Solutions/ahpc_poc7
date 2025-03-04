import Header from "@/app/ui/layout/header";

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      { children }
    </>
  );
}