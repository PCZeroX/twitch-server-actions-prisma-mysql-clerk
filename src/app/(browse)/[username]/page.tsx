import { notFound } from "next/navigation";

import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";
// import { StreamPlayer } from "@/components/stream-player";

import { Actions } from "./_components/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  // if (!user?.stream) {
  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <div>
      {/* <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing={isFollowing}
      /> */}
      <p>User Page</p>
      <p>params: {params.username}</p>
      <p>username: {user.username}</p>
      <p>user ID: {user.id}</p>
      <p>isBlocked by this user: {`${isBlocked}`}</p>
      <p>isFollowing: {`${isFollowing}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default UserPage;
