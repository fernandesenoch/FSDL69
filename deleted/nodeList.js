import React from 'react';
import Note from './Note';

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <Note note={note} onDelete={onDelete} onEdit={onEdit} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoteList;
