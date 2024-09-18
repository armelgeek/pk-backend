import { GenericController } from '../../common/infrastructure/generic.controller';
import { MediasDO } from '../../data/do/Medias';
// @ts-ignore
import { MediasRequestDTO } from '../../data/dto/Medias/request';
// @ts-ignore
import { MediasResponseDTO } from '../../data/dto/Medias/response';
import { mediasSA, MediasSA } from '../../service/applicatif/Medias';
import cloudinary from '../../utils/cloudinary';

class MediasController extends GenericController<
  MediasDO,
  MediasRequestDTO,
  MediasResponseDTO,
  MediasSA
> {

  mediasSA: MediasSA;

  constructor(mediasSA: MediasSA) {
    super(mediasSA);
    this.mediasSA = mediasSA;
  }

  uploadFile = async (req, res, next) => {
    try {
      // @ts-ignore
      const file = req.files?.file?.tempFilePath;

      const { resource_type } = req.params;

      const resourceOptions = (resource_type === "video" || resource_type === "audio")
          ? { resource_type }
          : {};

      const uploadResponse = await cloudinary.uploader.upload(file, {
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

      res.json({ msg: 'yaya', url: uploadResponse?.secure_url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err });
    }
  }

}

export const mediasController = new MediasController(mediasSA);

