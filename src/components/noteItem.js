import { useHistory } from "react-router";
const NoteItem = (props) => {
  let history = useHistory();
  return (
    <>
      <div
        className="card my-4"
        style={{ background: "white", color: "#dc3545" }}
      >
        <div className="card-body">
          <h2>{props.notes.name}</h2>
          <span className="card-text">
            <img
              src={`./images/${props.notes.image}`}
              alt={props.notes.category}
            ></img>
            <span style={{ float: "right", fontSize: "40px" }}>
              <p style={{ color: "#dc3545" }}>
                Price:{props.notes.number * props.notes.price}
              </p>
            </span>
          </span>
          <hr />
          <div
            style={{ backgroundColor: "#dc3545", color: "white" }}
            className="btn"
          >
            <span
              className="btn"
              style={{
                borderRight: "1px solid white",
                borderRadius: "0px",
                color: "white",
              }}
              onClick={() => {
                if (localStorage.getItem("token")) {
                  props.Up(
                    props.notes,
                    1,
                    "cart",
                    localStorage.getItem("token")
                  );
                  let arr = props.y.filter(function (item) {
                    if (item._id === props.notes._id) {
                      item.number = item.number + 1;
                      item.payment = item.payment + item.price;
                    }
                    return item;
                  });
                  props.setnote(arr);
                } else {
                  props.showAlert("Please Log In!!", "danger");
                  history.push("/login");
                }
              }}
            >
              <h5>+</h5>
            </span>
            <span style={{ paddingRight: "15px", paddingLeft: "15px" }}>
              {props.notes.number}
            </span>
            <span
              className="btn"
              style={{
                borderLeft: "1px solid white",
                borderRadius: "0px",
                color: "white",
              }}
              onClick={() => {
                if (localStorage.getItem("token")) {
                  if (props.notes.number - 1 !== 0) {
                    props.Up(
                      props.notes,
                      0,
                      "cart",
                      localStorage.getItem("token")
                    );
                    let arr = props.y.filter(function (item) {
                      if (item._id === props.notes._id) {
                        item.number = item.number - 1;
                        item.payment = item.payment - item.price;
                      }
                      return item;
                    });
                    props.setnote(arr);
                  } else {
                    props.Del(
                      props.setnote,
                      "F",
                      props.notes._id,
                      props.showAlert,
                      localStorage.getItem("token")
                    );

                    let arr = props.y.filter(function (item) {
                      return item._id !== props.notes._id;
                    });
                    props.setnote(arr);
                  }
                } else {
                  props.showAlert("Please Log In!!", "danger");
                  history.push("/login");
                }
              }}
            >
              <h5>-</h5>
            </span>
          </div>
          <br />
          <br />
          <i
            className="fas fa-trash btn-danger btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (localStorage.getItem("token")) {
                props.Del(
                  props.setnote,
                  "F",
                  props.notes._id,
                  props.showAlert,
                  localStorage.getItem("token")
                );
                let arr = props.y.filter(function (item) {
                  return item._id !== props.notes._id;
                });
                props.setnote(arr);
              } else {
                props.showAlert("Please Log In!!", "danger");
                history.push("/login");
              }
            }}
          >
            {" "}
            Remove
          </i>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
