import noteContext from "./noteContext";

const NoteState = (props) => {
  const FetchNotes = async (a) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2ZWEwODE1YTlmYmZkYzlhNWNiODM2In0sImlhdCI6MTYzNDkyOTU2Mn0.rEw0tMJh4xn8NDaRkNnDvNkb3fxg2ww60Sdmmxx9HPk",
      },
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallNotes",
      requestOptions
    );
    const data = await response.json();
    a(data);
  };

  const AddNotes = async(title,desc,a) => {
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
        tag: "morning",
      }),
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/addNote",
      requestOptions
    );
    const data = await response.json();
    try{
      alert(data.errors[0].msg);
    }catch(errror){
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
        tag: "a123",
      }),
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/updatenotes/".concat(b),
      requestOptions
    );
    const data = await response.json();
    // setPostId(data.id);
    a(data);
  };

  const deleteNote = async(a,b) => {
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
  };

  return (
    <noteContext.Provider value={{FetchNotes, AddNotes, updateNote, deleteNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
