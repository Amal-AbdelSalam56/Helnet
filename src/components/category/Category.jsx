import { t } from "i18next";
import "./Category.scss";

function Category({ data }) {
  return (
    <div className="text-lg grid gap-3">
      <p>{data.post_data.description}</p>
      {data?.post_data?.details && (
        <p>
          {t("Details")} : {data.post_data.details}
        </p>
      )}
      {data?.post_data?.price && (
        <p>
          {t("Suggested price")} : {data.post_data.price}
        </p>
      )}
      {data?.post_data?.contactInfo && (
        <p>
          {t("Contact method")} : {data.post_data.contactInfo}
        </p>
      )}
    </div>
  );
}

export default Category;
