import React from 'react'

type FormEvent = React.FormEvent<HTMLFormElement>

interface iNote {
  id: number
  text: string
}

const App = (): JSX.Element => {

  const [note, setNote] = React.useState<string>("");
  const [notes, setNotes] = React.useState<iNote[]>([]);
  const [count, setCount] = React.useState<number>(0);

  const addNew = (e: FormEvent): void => {

    e.preventDefault();

    const addNote = [...notes, { text: note, id: count }]
    setNotes(addNote);

    setCount(count + 1);
    setNote("")
  }

  const deleteOne = (id: number): void => {
    const newNotes = notes.filter((note)=>{
      return note.id !== id;
    })

    setNotes(newNotes)
  }

  return (
    <div className="App">
      <div className="add">
        <form onSubmit={addNew}>
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
          <button>
            Add
          </button>
        </form>
      </div>
      <div className="notes">
        <ul>
          {notes.map((note: iNote) => {
            return (
              <li key={note.id}>
                {note.text}
                <button onClick={() => deleteOne(note.id)}>
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
