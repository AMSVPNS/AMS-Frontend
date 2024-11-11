import Sidenav from "./sidenav/sidenav";
import Navbar from "./navbar/navbar"; // Adjust the path if needed

const Page = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="ml-64 mt-16 p-4">
        {" "}
        {/* Adjust margins if needed */}
        Hello
      </div>
    </div>
  );
};

export default Page;
