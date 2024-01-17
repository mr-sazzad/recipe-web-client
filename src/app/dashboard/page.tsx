import Link from "next/link";
import React from "react";

import { BsArrowRightShort } from "react-icons/bs";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="md:text-4xl text-3xl  font-semibold">Instruction</h2>
      <div>
        <h3 className="md:text-2xl text-xl font-semibold">Create Recipe</h3>
        <p className="lg:text-[16px] text-sm text-neutral-600">
          Please provide a distinctive name for your recipe and choose
          ingredients from our curated selection. Write clear instructions for
          preparing your dish. For enhanced understanding, consider attaching a
          photo of your recipe in the provided image field. Your image will
          greatly assist others in grasping the details of your delightful
          creation. Thank you for sharing your recipe with the community!
        </p>
        <div className="flex justify-end mt-2">
          <div className="flex items-center gap-1">
            <Link
              href="/dashboard/create-new-recipe"
              className="text-sm hover:underline"
            >
              create recipe
            </Link>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div>
        <h3 className="md:text-2xl text-xl font-semibold">Recipes</h3>
        <p className="lg:text-[16px] text-sm text-neutral-600">
          Explore your favorite recipes effortlessly by searching using either
          the recipe name or ingredients. Additionally, feel free to modify any
          recipe if you happen to notice an error. If a recipe doesn&lsquo;t
          meet your taste expectations, you can easily delete it. Your culinary
          journey is in your hands—search, modify, and curate your delicious
          experience!
        </p>

        <div className="flex justify-end mt-2">
          <div className="flex items-center gap-1">
            <Link href="/dashboard/recipes" className="text-sm hover:underline">
              recipes
            </Link>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div>
        <h3 className="md:text-2xl text-xl font-semibold">Feedback</h3>
        <p className="lg:text-[16px] text-sm text-neutral-600">
          If you encounter any issues while using this website, please take a
          moment to provide feedback. I am committed to resolving any problems
          you may face. Additionally, feel free to share your thoughts with me
          through the feedback feature. Your input is valuable, and I appreciate
          your contribution to improving your experience on this platform.
        </p>
        <div className="flex justify-end mt-2">
          <div className="flex items-center gap-1">
            <Link
              href="/dashboard/feedback"
              className="text-sm hover:underline"
            >
              feedback
            </Link>
            <BsArrowRightShort />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
