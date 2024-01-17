"use client";

const root = "/dashboard";

import { usePathname } from "next/navigation";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

const useRoutes = () => {
  const pathname = usePathname();

  const recipeDashboardRoutes = [
    {
      id: 1,
      label: "Create a recipe",
      href: `${root}/create-new-recipe`,
      icon: MdOutlineFoodBank,
      active: pathname.startsWith(`${root}/create-new-recipe`),
    },
    {
      id: 2,
      label: "Recipes",
      href: `${root}/recipes`,
      icon: IoFastFoodOutline,
      active: pathname.startsWith(`${root}/recipes`),
    },
    {
      id: 3,
      label: "Feedback",
      href: `${root}/feedbacks`,
      icon: VscFeedback,
      active: pathname.startsWith(`${root}/feedbacks`),
    },
  ];

  return recipeDashboardRoutes;
};

export default useRoutes;
