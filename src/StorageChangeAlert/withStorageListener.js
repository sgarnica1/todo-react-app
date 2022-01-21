import React from "react";

function withStorageListener(Component) {
  return function ComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    function toggleShow() {
      setStorageChange(false);
      props.sincronize();
    }

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

    return (
      <>
        <Component show={storageChange} toggleShow={toggleShow} />
      </>
    );
  };
}

export { withStorageListener };
