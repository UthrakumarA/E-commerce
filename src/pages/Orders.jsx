import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

return (
    <div>
      <br />
      <center><h1>This is just a prototype project ,so you can't make Order and Payments</h1></center>
      <div style={{textAlign: "center",marginTop: "50px",marginBottom: "50px",}}>
      <h2 style={{ color: "#2AA1EC" }}>Explore More Products</h2><br />
      <button className="details-btn"onClick={()=>{navigate("/Products")}}>
      Browse Products →
      </button>
    </div>
    </div>
  )
}

export default Order