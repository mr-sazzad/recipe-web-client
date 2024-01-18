"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { MdOutlineMessage } from "react-icons/md";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import {
  useCreateNewFeedbackMutation,
  useGetAllFeedbacksQuery,
} from "@/redux/api/feedback/feedbackApi";
import { UploadImageToImageBB } from "@/helper/imageUpload";
import toast from "react-hot-toast";
import Masonry from "react-masonry-css";
import { feedbackBreadPointObj } from "@/constants/breakpointsObj";
import Loading from "@/app/loading";
import { IFeedback } from "@/types";
import FeedbackCard from "@/components/FeedbackCard";
import Input from "@/components/Input";
import TextArea from "@/components/Text-area";

const Feedback = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [createNewFeedback] = useCreateNewFeedbackMutation();
  const { data: feedbacks, isLoading: isFeedbacksFetching } =
    useGetAllFeedbacksQuery(undefined);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      feedback: "",
      image: "",
    },
  });

  if (isFeedbacksFetching) {
    return <Loading />;
  }

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <TextArea
        id="feedback"
        placeholder="write your Feedback here"
        label="Feedback"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="image"
        label="Image"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="file"
      />
    </div>
  );

  const handleAddFeedback: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true);
      let imageUrl = "";

      if (data.image) {
        imageUrl = await UploadImageToImageBB(data.image[0]);
      }

      const requestedData = {
        name: data.name,
        feedback: data.feedback,
        image: imageUrl,
      };

      const result: any = await createNewFeedback(requestedData);

      if (result.error) {
        toast.error("something went wrong");
        setLoading(false);
      } else {
        toast.success("Your Feedback Added!");
        reset();
        setOpen(false);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 mb-14 lg:mb-0">
        <div className="flex justify-end">
          <Button
            label="Add A Feedback"
            onClick={() => setOpen(true)}
            icon={MdOutlineMessage}
          />
        </div>
        <Masonry
          breakpointCols={feedbackBreadPointObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {feedbacks &&
            feedbacks.map((feedback: IFeedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </Masonry>
      </div>

      {/* Modal */}
      <Modal
        title="Add A Feedback"
        isOpen={isOpen}
        onSubmit={handleSubmit(handleAddFeedback)}
        onClose={() => setOpen(false)}
        disabled={isLoading}
        buttonLabel="Add Your Feedback"
        body={bodyContent}
      />
    </>
  );
};

export default Feedback;
