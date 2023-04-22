import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

const convertS3UrlToNormalUrl = (s3Url) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: "v4",
  });

  const { bucketName, objectKey } =
    extractBucketNameAndObjectKeyFromS3Url(s3Url);

  const params = {
    Bucket: bucketName,
    Key: objectKey,
    Expires: 60 * 5,
  };
  const url = s3.getSignedUrl("getObject", params);

  const normalUrl = url.split("?")[0];

  return normalUrl;
};

const extractBucketNameAndObjectKeyFromS3Url = (s3Url) => {
  const urlParts = s3Url.split("/");
  const bucketName = urlParts[2];
  const objectKey = urlParts.slice(3).join("/");
  return { bucketName, objectKey };
};

export { convertS3UrlToNormalUrl };
