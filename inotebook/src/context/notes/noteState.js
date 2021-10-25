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
   a(data);
  };

  const AddNotes = async(title,desc,tag,a,b,c) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":c
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
    const data = await response.json();
    if(response.status===200){
      a(data);
      b("Added","success");
    }
    else{
      console.log(data);
      b("Error","danger");
    }
  };
  const AddNotes1 = async(title,desc,tag,b,c) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":c
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
    const data = await response.json();
    if(response.status===200){
      b("Added","success");
    }
    else{
      console.log(data);
      b("Error","danger");
    }
  };

  const updateNote = async (title,desc,tag,a,b,c) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":a
      },
      body: JSON.stringify({
        title: title,
        description: desc,
        tag: tag
      }),
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/updatenotes/".concat(c),
      requestOptions
    );
    // eslint-disable-next-line
    const data = await response.json();
    if(response.status===200){
      
      b("Updated","success"); 
    }
    else{
      b("Error","danger");
    }
  };

  const deleteNote = async(a,b,c,d) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":d
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
    <noteContext.Provider value={{FetchNotes, AddNotes, AddNotes1, updateNote, deleteNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
