const relationships =  [
  { id: 1, relations : [2, 3] },
  { id: 2, relations : [1]    },
  { id: 3, relations : [2]    }
];

export const getRelationsById = (id) => {
  return relationships.find(a => a.id === id).relations;
};

export default relationships;