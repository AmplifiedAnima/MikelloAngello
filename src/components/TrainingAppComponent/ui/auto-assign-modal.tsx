import React from "react";
import { Button } from "../../ui/button";
import { buttonStylesForTrainingModule } from "../../ui/styles/button-styles-training-module";
import closeIcon from "../../../assets/feather-icons/x-square.svg";
import { ScrollBarComponent } from "../../ui/scrollbar-component";
import ModalTemplate from "../../ui/modal-template";

interface AutoAssignModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "exercises" | "load";
  onConfirm: () => void;
}

export const AutoAssignModal: React.FC<AutoAssignModalProps> = ({
  isOpen,
  onClose,
  type,
  onConfirm,
}) => {
  const isExerciseType = type === "exercises";

  return (
    <ModalTemplate isOpen={isOpen} className="w-[600px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Auto-assign {isExerciseType ? "Exercises" : "Load"}
        </h2>
        <div className="flex justify-end">
          <Button
            className={`${buttonStylesForTrainingModule} xl:h-8 xl:px-1 xl:py-2 xl:w-[2vw]`}
            onClick={onClose}
          >
            <img src={closeIcon} width={20} alt="Close" />
          </Button>
        </div>
      </div>

      <ScrollBarComponent className="mt-4 max-h-[70vh]">
        <div className="space-y-4">
          <p className="text-zinc-400">
            {isExerciseType
              ? "This will automatically assign exercises based on your training objectives and preferences."
              : "This will automatically calculate and assign load parameters based on your selected exercises."}
          </p>

          <div className="rounded-lg bg-black p-4">
            <div className="space-y-3">
              {isExerciseType ? (
                <>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-sm text-zinc-400">
                      Will assign main exercises based on movement patterns
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-zinc-400">
                      Will assign accessory exercises to complement main
                      movements
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-sm text-zinc-400">
                      Will calculate appropriate sets and reps
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-zinc-400">
                      Will determine progressive overload parameters
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              className={`${buttonStylesForTrainingModule} bg-red-600 hover:bg-red-700 xl:h-8 xl:px-1 xl:py-2 xl:w-[12vw]`}
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Confirm Auto-assign
            </Button>
          </div>
        </div>
      </ScrollBarComponent>
    </ModalTemplate>
  );
};

export default AutoAssignModal;
