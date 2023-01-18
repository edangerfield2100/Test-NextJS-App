import Navbar from "../Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default RootLayout;
