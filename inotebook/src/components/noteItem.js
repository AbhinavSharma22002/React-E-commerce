import { useHistory } from "react-router";
const NoteItem = (props) => {
  let history = useHistory();
  return (
    <>

      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{props.notes.category.toUpperCase()}</h5>
          </div>
          <hr/>
          <span className="card-text">
            <img src={`./images/${props.notes.image}`} alt={props.notes.category}></img>
            <span style={{float:'right',fontSize:'40px'}}>
              <p style={{color:'black'}}>Price:{props.notes.price}</p>
            </span>
            <span>
              {props.notes.name}
            </span>
          </span>
          <hr/>
            <i
              className="fas fa-trash btn-danger btn"
              style={{ cursor: "pointer"}}
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
