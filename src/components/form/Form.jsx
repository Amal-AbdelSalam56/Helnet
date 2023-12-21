import { useEffect, useState } from "react";
import { Button, Input, Modal } from "../ui";
import { t } from "i18next";

export default function Form({ isOpen, closeModal, title }) {
  const [formType, setFormType] = useState("");

  useEffect(() => {
    switch (title) {
      case "View a used product":
        setFormType("usedProduct");
        break;

      case "Show the new product":
        setFormType("newProduct");
        break;

      case "Service Request":
        setFormType("service");
        break;

      case "Post Images":
        setFormType("images");
        break;

      case "Post Video":
        setFormType("video");
        break;

      case "Post Record":
        setFormType("record");
        break;

      default:
        setFormType("text");
        break;
    }
  }, [title]);

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title={t(title)}
      closeIcon={true}
      children={
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          {formType === "usedProduct" || formType === "newProduct" ? (
            <>
              <Input type="text" label={t("Product Name")} />
              <Input type="text" label={t("Product Type")} />
              <Input type="number" label={t("Price")} />
              <Input type="number" label={t("quanti")} />
            </>
          ) : null}

          {formType === "usedProduct" ? (
            <Input type="text" label={t("Product status")} />
          ) : null}

          {formType === "usedProduct" || formType === "newProduct" ? (
            <>
              <Input type="text" label={t("Attach a picture of the product")} />
            </>
          ) : null}

          {formType === "service" ? (
            <>
              <Input type="tel" label={t("service name")} />

              <label htmlFor="formTextarea">{t("Details")}</label>
              <textarea
                id="formTextarea"
                className="w-full rounded-lg bg-red-50 resize-none px-2 h-28 text-xl w-100"
              />

              <Input type="number" label={t("Suggested price")} />
            </>
          ) : null}

          {formType === "usedProduct" ||
          formType === "newProduct" ||
          formType === "service" ? (
            <>
              <Input type="tel" label={t("Contact method")} />
            </>
          ) : null}

          <Button children={t("Post")} />
        </form>
      }
    />
  );
}
