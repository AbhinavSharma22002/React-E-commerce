import noteContext from "./noteContext";

const NoteState = (props) => {
  const FetchNotes = async (a,b) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "auth-token":b
      },
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallNotes",
      requestOptions
    );
    const data = await response.json();
   console.log(data);
   a(data);
  };

  const AddNotes = async(title,desc,tag,a,b) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2ZWEwODE1YTlmYmZkYzlhNWNiODM2In0sImlhdCI6MTYzNDkyOTU2Mn0.rEw0tMJh4xn8NDaRkNnDvNkb3fxg2ww60Sdmmxx9HPk",
      },
      body: JSON.stringify({
        title: title,
        description: desc,
        tag: tag
      }),
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/addNote",
      requestOptions
    );
    // const data = await response.json();
    if(response.status===200){
      b("Added","success");
    }
    else{
      b("Error","danger");
    }
  };

  const updateNote = async (title,desc,a,b) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2ZWEwODE1YTlmYmZkYzlhNWNiODM2In0sImlhdCI6MTYzNDkyOTU2Mn0.rEw0tMJh4xn8NDaRkNnDvNkb3fxg2ww60Sdmmxx9HPk",
      },
      body: JSON.stringify({
        title: title,
        description: desc,
        tag: a,
      }),
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/updatenotes/".concat(b),
      requestOptions
    );
    // eslint-disable-next-line
    // const data = await response.json();
    // setPostId(data.id);
    if(response.status===200){
      console.log(response.json);
    }
    else{
      console.log(response.status);
    }
  };

  const deleteNote = async(a,b,c) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2ZWEwODE1YTlmYmZkYzlhNWNiODM2In0sImlhdCI6MTYzNDkyOTU2Mn0.rEw0tMJh4xn8NDaRkNnDvNkb3fxg2ww60Sdmmxx9HPk",
      },
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/deleteNote/".concat(b),
      requestOptions
    );
    // eslint-disable-next-line
    const data = await response.json();
    if(response.status===200){
      c("Deleted","success");
    }else{
      c("Error","danger");
    }
  };

  return (
    <noteContext.Provider value={{FetchNotes, AddNotes, updateNote, deleteNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
