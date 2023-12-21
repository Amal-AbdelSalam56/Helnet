import { useNavigate } from "react-router-dom";

const ButtonsForm = ({ next, prev }) => {
  const navigate = useNavigate();
  return (
    <form
      className="btnform"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        marginTop: "3.5rem",
      }}
    >
      <div className="pb-2">
        <button
          type="submit"
          disabled
          className="btn btn-dark font-weight-bold logbtn"
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: "16px",
            width: "250px",
            maxWidth: "100%",
            fontSize: "24px",
            fontWeight: "600",
            letterSpacing: "1px",
            border: "none",
          }}
          onClick={() => navigate(prev)}
        >
          السابق
        </button>
      </div>
      <div className="pb-2">
        <button
          type="submit"
          className="btn btn-dark font-weight-bold logbtn"
          style={{
            background: "linear-gradient(#00ACFF75, #BD00FF58)",
            borderRadius: "16px",
            width: "250px",
            maxWidth: "100%",
            fontSize: "24px",
            fontWeight: "600",
            letterSpacing: "1px",
            border: "none",
          }}
          onClick={() => navigate(next)}
        >
          التالي
        </button>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .logbtn {
              width: 289px;
            }
          }
          @media (max-width: 1018px) {
            .btnform {
                justify-content: center!important;

            }
          }
        `}
      </style>
    </form>
  );
};

export default ButtonsForm;
