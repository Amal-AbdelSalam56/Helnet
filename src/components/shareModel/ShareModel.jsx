import React, { useState } from "react";
import { Button, Modal } from "../ui";
import { useTranslation } from "react-i18next";
import {
  facebook,
  twitter,
  reddit,
  whatsApp2,
  copy,
} from "../../assets/images/icons";
import "./ShareModel.scss";

export default function ShareModel({ isShareOpen, closeShareModal }) {
  const socialIcons = [
    { icon: twitter, name: "Twitter" },
    { icon: facebook, name: "Facebook" },
    { icon: reddit, name: "Reddit" },
    { icon: whatsApp2, name: "WhatsApp" },
  ];

  const [t] = useTranslation();

  return (
    <div>
      <Modal
        isOpen={isShareOpen}
        closeModal={closeShareModal}
        title={t("Share this post")}
        closeIcon={true}
        isFullScreen={false}
      >
        <p className="text-stone-900 text-lg">
          {t("if you like this post share it with your friends!")}
        </p>

        <ul className="sharingButtons">
          {socialIcons.map((socialIcon, index) => (
            <li
              key={index}
              className={socialIcon.name}
              onClick={() => console.log("shared")}
              role="button"
            >
              <button>
                <img src={socialIcon.icon} alt={socialIcon.name} />
              </button>
              <p>{t(socialIcon.name)}</p>
            </li>
          ))}
        </ul>

        <div className="share__link">
          <input
            type="text"
            disabled
            placeholder={t("Now copy the link from here")}
          />
          <button>
            <img src={copy} alt="" role="button" />
          </button>
        </div>
      </Modal>
    </div>
  );
}
