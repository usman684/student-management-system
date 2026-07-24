const StatsCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-muted">{title}</h6>
          <h3 className="fw-bold">{value}</h3>
        </div>

        <div
          className="rounded-circle d-flex align-items-center justify-content-center text-white"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: bgColor,
            fontSize: "24px",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
