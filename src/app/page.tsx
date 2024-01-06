import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <p>Homepage</p>
      <p>Only authenticated users can see this</p>
      <Button size={"lg"} variant={"link"}>
        Click me
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
