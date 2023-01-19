// Example of a dynamic route in NextJs

type PageProps = {
  params: {
    username: string;
  };
};

const Profile = ({ params: { username } }: PageProps) => {
  return (
    <div className="mt-8 flex justify-center">
      <span className="text-2xl">Hello {username}</span>
    </div>
  );
};

export default Profile;
