import React from "react";

const PlayerCard = ({
  name,
  img,
  nat,
  team,
  pos,
  ovr,
  pac,
  sho,
  pas,
  dri,
  def,
  phy,
}) => {
  return (
    <div className="div mt-5">
      <div className="mx-auto" style={{ width: "280px" }}>
        <div
          className="card position-relative"
          style={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >

          <img
            className="card-img-top"
            src="https://game-assets.fut.gg/2025/rarities-level-0-large/85.77a1f2480c2a8af9f547e08028637b4c2aaa590216bcd04db1499b09706e5fef.png?quality=100&width=500"
            alt="Card Background"
          />


          <img
            className="position-absolute start-50 translate-middle-x"
            style={{
              width: "64.33%",
              top: "17.4%",
            }}
            src={img}
            alt={name}
          />


          <div
            className="position-absolute text-center w-75 text-truncate"
            style={{
              top: "67.6%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {name}
          </div>


          <div
            className="position-absolute text-center"
            style={{
              top: "22.8%",
              left: "21.8%",
              transform: "translateX(-50%)",
            }}
          >
            <div style={{ fontSize: "1.73rem", lineHeight: "0.91" }}>{ovr}</div>
            <div style={{ fontSize: "0.83rem", marginTop: "-0.07em" }}>{pos}</div>
          </div>

          <div
            className="d-flex justify-content-between position-absolute"
            style={{
              top: "71.6%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "68.8%",
            }}
          >
            {[{ label: "PAC", value: pac }, { label: "SHO", value: sho }, { label: "PAS", value: pas }, { label: "DRI", value: dri }, { label: "DEF", value: def }, { label: "PHY", value: phy }].map(
              (stat, index) => (
                <div key={index} className="text-center">
                  <div style={{ fontSize: "0.58rem", marginBottom: "0.2em" }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "0.92rem" }}>{stat.value}</div>
                </div>
              )
            )}
          </div>

          <div
            className="position-absolute d-flex justify-content-center align-items-center w-100 gap-2"
            style={{ top: "81.8%" }}
          >
            <img
              src={nat}
              className="img-fluid"
              style={{ maxHeight: "1em", maxWidth: "1.2em" }}
              alt="Nation"
            />
            <img
              src={team}
              className="img-fluid"
              style={{ maxHeight: "1em", maxWidth: "1.2em" }}
              alt="League"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .card:hover {
          transform: scale(1.1);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .div {
          width: 300px;
          }
      `}</style>
    </div>
  );
};

export default PlayerCard;
