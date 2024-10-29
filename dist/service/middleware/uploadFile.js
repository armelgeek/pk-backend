"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileS3FromTo = void 0;
const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});
const uploadFileS3FromTo = (from, to) => {
    // Read content from the file
    const fileContent = fs.readFileSync(from);
    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${to}`,
        Body: fileContent,
    };
    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
exports.uploadFileS3FromTo = uploadFileS3FromTo;
//# sourceMappingURL=uploadFile.js.map