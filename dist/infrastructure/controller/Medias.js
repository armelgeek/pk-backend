"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediasController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Medias_1 = require("../../service/applicatif/Medias");
const cloudinary_1 = require("../../utils/cloudinary");
class MediasController extends generic_controller_1.GenericController {
    constructor(mediasSA) {
        super(mediasSA);
        this.uploadFile = async (req, res, next) => {
            var _a, _b;
            try {
                // @ts-ignore
                const file = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a.file) === null || _b === void 0 ? void 0 : _b.tempFilePath;
                const { resource_type } = req.params;
                const resourceOptions = (resource_type === "video" || resource_type === "audio")
                    ? { resource_type }
                    : {};
                const uploadResponse = await cloudinary_1.default.uploader.upload(file, {
                    upload_preset: 'profil',
                    ...resourceOptions,
                });
                // type?: string;
                // url?: string;
                // size?: string[];
                // profileId?: string;
                // pageId?: string;
                // category?: string;
                // eventId?: string;
                // const data = await this.mediasSA.create({ type: resource_type,  })
                res.json({ msg: 'yaya', url: uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.secure_url });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({ err });
            }
        };
        this.mediasSA = mediasSA;
    }
}
exports.mediasController = new MediasController(Medias_1.mediasSA);
//# sourceMappingURL=Medias.js.map