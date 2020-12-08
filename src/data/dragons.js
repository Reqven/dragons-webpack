const dragons = {
  names: [
    { id: 1, name: "Apalala", element: "fire" },
    { id: 2, name: "Balaur", element: "water" },
    { id: 3, name: "Bolla" },
  ],
  count: 3,
};

export const getDragonById = (id) => {
  return dragons.names.find((a) => a.id === id);
};

export default dragons;
