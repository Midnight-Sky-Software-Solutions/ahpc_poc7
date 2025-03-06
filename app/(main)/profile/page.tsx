import { getMe } from "@/app/services/wa-contacts";
import { lateef } from "@/app/ui/fonts";
import ProfileForm from "@/app/ui/profile/profile-form";

export default async function Page() {
  const me = await getMe();
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-6xl grow">
        <h2 className={`text-5xl py-5 ${lateef.className}`}>Profile</h2>
        <div>
          <ProfileForm
            firstName={me?.FirstName || ''}
            lastName={me?.LastName || ''}
            email={me?.Email || ''}
          />
        </div>
      </div>
    </div>
  );
}