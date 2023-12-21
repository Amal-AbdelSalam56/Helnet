import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { close } from "../../../assets/images/icons";

export default function Modal({
  isOpen,
  closeModal,
  title,
  children,
  closeIcon,
  isFullScreen = true,
}) {
  const [isXIcon, setIsXIcon] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    setIsXIcon(closeIcon);
    setIsArabic(localStorage.getItem("i18nextLng") === "ar");
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full  transform overflow-hidden rounded-2xl bg-white p-6 text-start align-middle shadow-xl transition-all ${
                  isFullScreen ? "max-w-2xl" : "max-w-md"
                }`}
              >
                <div className={`${isArabic ? "text-right" : "text-left"}`}>
                  {isXIcon && (
                    <button
                      className={`absolute z-50 right-0 top-0 h-1 ${
                        isArabic ? "left-0" : "right-0"
                      }`}
                      onClick={closeModal}
                    >
                      <img src={close} alt="" role="button" />
                    </button>
                  )}

                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}

                  <div className="mt-4">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
