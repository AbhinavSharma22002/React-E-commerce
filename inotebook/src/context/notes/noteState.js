import noteContext from "./noteContext";

const NoteState = (props) => {

  const FetchNotes = async (a) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "auth-token":a
      },
    };
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallNotes",
      requestOptions
    );
    const data = await response.json();
    return data;
  };


  function filterArrayElementByEdit(array,b) {
    for(let i=0;i<array.length;i++){
      if(array[i].name===b){
        return false;
      }
    }
    return true;
  }
  
  const AddNote = async(item,b,c) => {

    let arr = await FetchNotes(c,b);

    if(filterArrayElementByEdit(arr,item.name)){
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":c
          },
      body: JSON.stringify({
        image: item.image,
        name: item.name,
        number: 1,
        note_id: item._id,
        category: item.category,
        price: item.price
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
    }
    else{
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":c
            },
        body: JSON.stringify({
          user: item.user,
          image: item.image,
        name: item.name,
        category: item.category,
        val: 1,
        price: item.price
        }),
      };
       const response = await fetch(
        `http://localhost:5000/api/notes/updatenotes/${item._id}`,
        requestOptions
      );
      await response.json();

      if(response.status===200){
        b("Added","success");
      }
      else{
        b("Error","danger");
      }
    }

  };

  const UpdateNote = async(item,a,c) =>{
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":c
          },
      body: JSON.stringify({
        user: item.user,
        image: item.image,
      name: item.name,
      category: item.category,
      val: a,
      price: item.price
      }),
    };
     await fetch(
      `http://localhost:5000/api/notes/updatenotes/${item.note_id}`,
      requestOptions
    );
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
    // const data = await response.json();
    if(response.status===200){
      c("Deleted","success");
    }else{
      c("Error","danger");
    }
  };

  return (
    <noteContext.Provider value={{FetchNotes, AddNote, deleteNote,UpdateNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
