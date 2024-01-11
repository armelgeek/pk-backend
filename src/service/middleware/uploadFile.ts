import fs = require('fs');
import AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});

export const uploadFileS3FromTo = (from: string, to: string) => {
  // Read content from the file
  const fileContent = fs.readFileSync(from);

  // Setting up S3 upload parameters
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${to}`, // File name you want to save as in S3
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
