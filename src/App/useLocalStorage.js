import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { sincronizedItem, loading, error, item } = state;

  // ACTION CREATORS
  const onError = (err) => dispatch({ type: actionTypes.error, payload: err });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSaveItem = (item) =>
    dispatch({ type: actionTypes.save, payload: item });

  // EFFECTS
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (err) {
        onError(err);
      }
    }, 1500);
  }, [sincronizedItem]);

  const sincronizeItem = () => {
    dispatch({ type: actionTypes.sincronize });
  };

  const saveItemToLocalStorage = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSaveItem(newItem);
      // setItem(newItem);
    } catch (err) {
      onError(err);
    }
  };

  return {
    item,
    saveItemToLocalStorage,
    loading,
    error,
    sincronizeItem,
  };
}

// INITIAL STATE & REDUCER
const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  loading: true,
  error: false,
  item: initialValue,
});

// ACTION TYPES
const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.success:
      return {
        ...state,
        item: action.payload,
        loading: false,
        sincronizedItem: true,
      };
    case actionTypes.sincronize:
      return {
        ...state,
        loading: true,
        sincronizedItem: false,
      };
    case actionTypes.save:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export { useLocalStorage };
