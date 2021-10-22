import noteContext from "./noteContext";

const NoteState = (props) => {
  let note = [
    {
      id: 1,
      name: "abhi",
      class: "5a",
    },
    {
      id: 2,
      name: "abh",
      class: "5a",
    },
    {
      id: 3,
      name: "ab",
      class: "5a",
    },
    {
      id: 4,
      name: "a",
      class: "5a",
    },
  ];

  return (
    <noteContext.Provider value={{ note }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
