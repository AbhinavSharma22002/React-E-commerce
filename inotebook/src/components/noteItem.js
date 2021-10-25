import { useHistory } from "react-router";
const NoteItem = (props) => {
  let history = useHistory();
  return (
    <>

      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{props.notes.name}</h5>
          </div>
          <hr/>
          <p className="card-text">
            <img src={`./images/${props.notes.image}`}></img>
            </p>
            <i
              className="fas fa-trash"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if(localStorage.getItem('token')){
                  props.Del(props.setnote, props.id,props.showAlert,localStorage.getItem('token'));
                  let arr = props.y.filter(function(item) {
                    return item._id !== props.id
                })
                  props.setnote(arr); 
                }
                else{
                  props.showAlert("Please Log In!!","danger");
                  history.push('/login');
                }
              }}
            > Remove</i>
        </div>

      </div>
    </>
  );
};

export default NoteItem;
