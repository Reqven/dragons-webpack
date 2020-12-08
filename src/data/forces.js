const forces =  [
  { id: 1, notes : [12, 13, 19, 11] },
  { id: 2, notes : [11, 15, 17, 9]  },
  { id: 3, notes : [20, 11, 12, 7]  }
];

export const getNotesById = (id) => {
  return forces.find(a => a.id === id).notes;
};

export const getAVGForceById = (id) => {
  const notes = getNotesById(id);
  return notes.reduce((a, b) => a + b, 0) / notes.length;
};

export default forces;