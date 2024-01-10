"use client";

import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";

import { cn } from "@/lib/utils";

import { useChatSidebar } from "@/store/use-chat-sidebar";

import { useViewerToken } from "@/hooks/use-viewer-token";

import { ChatToggle } from "./chat-toggle";

// type CustomStreamType = {
//   id: string;
//   isChatEnabled: boolean;
//   isChatDelayed: boolean;
//   isChatFollowersOnly: boolean;
//   isLive: boolean;
//   thumbnailUrl: string | null;
//   name: string;
// };

// type CustomUserType = {
//   id: string;
//   username: string;
//   bio: string | null;
//   stream: CustomStreamType | null;
//   imageUrl: string;
//   _count: { followedBy: number };
// };

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  // user: CustomUserType;
  // stream: CustomStreamType;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  user,
  stream,
  isFollowing,
}: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);
  const { collapsed } = useChatSidebar((state) => state);

  console.log("stream:", stream);
  console.log("isFollowing:", isFollowing);
  console.log({ token, name, identity });

  if (!token || !name || !identity) {
    // return <StreamPlayerSkeleton />;
    return (
      <div>
        <p>Cannot watch the stream</p>
      </div>
    );
  }

  return (
    <>
      {collapsed && (
        <div className="hidden lg:block fixed top-[100px] right-2 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
          collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        Allowed to watch the stream
      </LiveKitRoom>
    </>
  );
};
