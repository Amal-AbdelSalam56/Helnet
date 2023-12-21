import { useNavigate } from "react-router-dom";
import "./Gallery.scss";

export default function Gallery({ data, target }) {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(target);
  };

  return (
    <div className={`gallery with${data.length}`}>
      {data.slice(0, 5).map((image, index) => (
        <div
          key={index}
          className={`imageNo${index + 1}`}
          onClick={handelClick}
        >
          <img src={image} alt="" />

          {data.length > 5 && (
            <>
              {index === 4 && (
                <p onClick={handelClick} className="gallery__indicator">
                  +{data.length - 5}
                </p>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
