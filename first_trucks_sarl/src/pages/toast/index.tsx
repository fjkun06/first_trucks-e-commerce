import { toast, ToastContainer } from "react-toastify";

const notify = () => {
  toast("Default Notification !", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  // toast("Default Notification !", {
  //   position: "top-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // });

  // toast.success("Success Notification !", {
  //   position: toast.POSITION.TOP_CENTER,
  // });

  // toast.error("Error Notification !", {
  //   position: toast.POSITION.TOP_LEFT,
  // });

  // toast.warn("Warning Notification !", {
  //   position: toast.POSITION.BOTTOM_LEFT,
  // });

  // toast.info("Info Notification !", {
  //   position: toast.POSITION.BOTTOM_CENTER,
  // });

  // toast("Custom Style Notification with css class!", {
  //   position: toast.POSITION.BOTTOM_RIGHT,
  //   className: "foo-bar",
  // });
};

const Toast = () => {
  return (
    <section className="toasty">
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </section>
  );
};

export default Toast;
