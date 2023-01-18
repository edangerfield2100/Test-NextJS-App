import { useRouter } from "next/router";

// Example of a dynamic route in NextJs

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="mt-8 flex justify-center">
      <span className="text-2xl">Hello {username}</span>
    </div>
  );
};

export default Profile;
