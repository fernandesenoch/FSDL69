import React, { useState, useEffect } from 'react';

function NoteForm({ onAddNote, editingNote, onEditNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      onEditNote({ ...editingNote, title, content });
    } else {
      const newNote = { id: Date.now(), title, content };
      onAddNote(newNote);
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
}

export default NoteForm;
