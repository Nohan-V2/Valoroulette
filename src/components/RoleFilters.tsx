"use client";

import Image from "next/image";
import type { RoleName } from "@/types/agent";

interface RoleFiltersProps {
  activeRoles: Set<RoleName>;
  onToggleRole: (role: RoleName) => void;
}

const roles: { name: RoleName; icon: string; label: string }[] = [
  {
    name: "Duelist",
    icon: "/assets/img/duelist.png",
    label: "Filter by Duelist",
  },
  {
    name: "Initiator",
    icon: "/assets/img/initiator.png",
    label: "Filter by Initiator",
  },
  {
    name: "Controller",
    icon: "/assets/img/controller.png",
    label: "Filter by Controller",
  },
  {
    name: "Sentinel",
    icon: "/assets/img/sentinel.png",
    label: "Filter by Sentinel",
  },
];

export default function RoleFilters({
  activeRoles,
  onToggleRole,
}: RoleFiltersProps) {
  return (
    <div
      className="w-full flex justify-center items-center gap-2 mt-8 md:mt-12 lg:mt-16"
      role="group"
      aria-label="Filter by role"
    >
      {roles.map((role) => {
        const isActive = activeRoles.has(role.name);

        return (
          <button
            key={role.name}
            type="button"
            onClick={() => onToggleRole(role.name)}
            className={`w-16 h-16 md:w-[72px] md:h-[72px] rounded bg-white/15 p-2 cursor-pointer border-2 transition-all active:scale-90 hover:opacity-70 touch-manipulation ${
              isActive
                ? "outline outline-2 outline-valorant-yellow outline-offset-0 opacity-100"
                : "border-white/15 opacity-45"
            }`}
            aria-label={role.label}
            aria-pressed={isActive}
          >
            <Image
              src={role.icon}
              alt={`${role.name} icon`}
              width={72}
              height={72}
              className="w-full h-full object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}
