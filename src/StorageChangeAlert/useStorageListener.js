import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onChange = (event) => {
      if (event.key === "TODOS_V1") {
        setStorageChange(true);
      }
    };
    window.addEventListener("storage", onChange);

    return () => {
      window.removeEventListener("storage", onChange);
    };
  }, []);

  function toggleShow() {
    setStorageChange(false);
    sincronize();
  }

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
