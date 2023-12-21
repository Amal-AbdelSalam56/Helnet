import { t } from "i18next";
import { image, profile1, voice } from "../../../assets/images/icons";

export default function CreateComment() {
  return (
    <div className="flex gap-3 bg-slate-200 py-2 px-3 mb-10 rounded-full">
      <img className="w-7" src={profile1} alt="" />
      <input
        placeholder={t("write a comment")}
        className="w-100 outline-none bg-slate-200 placeholder-gray-400"
      />
      <img src={image} alt="" role="button" />
      <img src={voice} alt="" role="button" />
    </div>
  );
}
