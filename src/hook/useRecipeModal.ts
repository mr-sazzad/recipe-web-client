import React, { useState } from "react";

interface RecipeStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useRecipeModal = (): RecipeStore => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};
