export default function taskReducer(state, action) {
  switch (action.type) {
    case "create": {
      return [...state, action.payload];
    }

    case "update": {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }

    case "delete": {
      return state.filter((task) => task.id !== action.payload);
    }

    case "allDelete": {
      state.length = 0;
      return [...state];
    }

    case "search": {
      const filterData = state.filter((task) =>
        task.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return [...filterData];
    }

    case "favorite": {
      const taskIndex = state.findIndex((task) => task.id === action.payload);

      if (taskIndex !== -1) {
        const newTasks = [...state];
        newTasks[taskIndex] = {
          ...newTasks[taskIndex],
          isFavorite: !newTasks[taskIndex].isFavorite,
        };
        return newTasks;
      }

      return state;
    }

    default:
      return state;
  }
}
