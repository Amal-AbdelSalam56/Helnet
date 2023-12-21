import { useNavigate } from "react-router-dom";
import { PFP } from "../../../assets/images";
import { vertical3dots } from "../../../assets/images/icons";
import Dropdown from "../dropdown/Dropdown";
import "./PostHeader.scss";

export default function PostHeader({ user }) {
  const navigate = useNavigate();
  const openProfile = () => {
    navigate("/");
  };

  return (
    <div className="postHeader">
      <div className="postHeader__user">
        <img
          className="postHeader__user--image"
          role="button"
          src={user?.user_img ? storageLink + e.user.profile.user_img : PFP}
          alt="PFP"
        />

        <div className="postHeader__user--data">
          <div className="userData">
            <p className="name" role="button" onClick={openProfile}>
              {user?.username}
            </p>
          </div>
          {/* <p className="postingTime">{moment(e?.created_at).fromNow(true)}</p> */}
        </div>
      </div>

      <div className="postHeader__aside">
        <Dropdown
          buttonData={<img src={vertical3dots} alt="" role="button" />}
          labels={["Edit","Delete"]}
        />
      </div>
    </div>
  );
}
