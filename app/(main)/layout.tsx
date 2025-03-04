import Header from "@/app/ui/layout/header";

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="max-w-6xl w-full">
          { children }
        </div>
      </div>
    </>
  );
}