import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addfilesubmission } from "../../supabase";

function FileUpload({ children, onUpload }) {
  let cloudinary;
  let widget;
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }

    function onIdle() {
      if (!widget) {
        widget = createWidget();
      }
    }

    "requestIdleCallback" in window
      ? requestIdleCallback(onIdle)
      : setTimeout(onIdle, 1);
  }, []);

  const [uploadUrl, setUploadUrl] = useState();
  function createWidget() {
    const options = {
      cloudName: "dsdfxkluy",
      uploadPreset: "c9wdqaxv",
      folder: "ruwad",
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (error || result.event === "success") {
        onUpload(error, result, widget);
        console.log(result.info.url);
        setUploadUrl(result.info.url);
      }
    });
  }

  const submitfile = async () => {
    addfilesubmission(uploadUrl, user).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    if (uploadUrl) {
      submitfile();
    }
  }, [uploadUrl]);

  function open() {
    if (!widget) {
      widget = createWidget();
    }
    widget && widget.open();
  }
  return <>{children({ cloudinary, widget, open })}</>;
}

export default FileUpload;
