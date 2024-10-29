"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteS3File = void 0;
const Minio = require("minio");
const s3Client = new Minio.Client({
    endPoint: process.env.AWS_S3_ENDPOINT,
    accessKey: process.env.AWS_S3_ACCESS_KEY,
    secretKey: process.env.AWS_S3_SECRET_KEY,
});
const deleteS3File = (filePath) => {
    return s3Client.removeObject(process.env.AWS_S3_BUCKET, filePath, function (err) {
        if (err) {
            return (`Suppression du ficher avec error : ${err}`);
        }
        return (`Fichier supprimer avec succès.`);
    });
};
exports.deleteS3File = deleteS3File;
//# sourceMappingURL=file.js.map