import Header from "@/app/ui/layout/header";
import ProfileInfo from "../ui/layout/profile-info";

export default async function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header>
        <ProfileInfo />
      </Header>
      { children }
    </>
  );
}