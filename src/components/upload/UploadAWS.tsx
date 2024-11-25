import { Button, styled } from "@mui/material";
import AWS from "aws-sdk";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadAWS = () => {
  const [file, setFile] = useState<any>(null);
  const [params, setParams] = useState({ Bucket: "onoy", Key: "test.jpg" });
  const [date, setDate] = useState<string>("");
  const handleFileChange = (files: any) => {
    const file = files[0];
    setFile(file);
    uploadFile(file);
  };

  const uploadFile = async (newFile: any) => {
    // S3 Bucket Name
    const createDate = new Date().toISOString();
    setDate(createDate);
    // // S3 Credentials
    AWS.config.update({
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: import.meta.env.VITE_S3_BUCKET },
      region: import.meta.env.VITE_REGION,
    });

    // Files Parameters

    const newParams = {
      Bucket: "onoy",
      Key: `${createDate}${newFile.name}`,
      Body: newFile,
    };

    // Uploading file to s3

    const upload = s3
      .putObject(newParams)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress

        console.log(
          // @ts-ignore
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((result) => {
      // @ts-ignore
      const { err, data } = result;
      console.log(err);
      // File successfully uploaded
      console.log(result, "result");
      setParams(newParams);
    //   alert("File uploaded successfully.");
    });
  };

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => handleFileChange(event.target.files)}
        />
      </Button>
      <img
        src={`https://${params.Bucket}.s3.${
          import.meta.env.VITE_REGION
        }.amazonaws.com/${encodeURIComponent(params.Key)}`}
        alt="photo"
        style={{ height: "400xp", width: "400px" }}
      />
      {/* <Button
            variant="contained"
            onClick={uploadFile}
            disabled={!file}
            sx={{ marginLeft: 2 }}
        >Upload</Button> */}
    </>
  );
};

export default UploadAWS;
