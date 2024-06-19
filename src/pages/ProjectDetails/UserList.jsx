import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="rounded-md border">
          <p className="py-2 px-3">{"Jayanth" || "Pardhu"}</p>
        </div>
        {[1, 1, 1, 1].map(() => (
          <div className="py-2 group  hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
            <Avatar>
              <AvatarFallback>Z</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">@Jayanth-Code</p>
              <p className="text-sm text-muted-foreground">@Jayanth-Code</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
