import ProfileSection from "./ProfileSection";

export default function ProfilePage() {
  const mockUser = {
    name: "Prashant Dubey",
    email: "prashant@example.com",
    avatar: "/avatar.jpg",
    bio: "Frontend Developer at Wipro | React, Next.js, TailwindCSS enthusiast. Passionate about clean UI and great UX.",
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black px-4 py-6">
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Profile
      </h1>
      <ProfileSection user={mockUser} />
    </main>
  );
}
