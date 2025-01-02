import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  upload(folder: string) {
    
    return {
      
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          console.log("Arquivo baixado, nome do arquivo: " + fileName)
          callback(null, fileName); // Passa o nome do arquivo para o callback
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, 
      },
      fileFilter: (request, file, callback) => {
        const allowedMimes = [
          'image/jpeg',
          'image/png',
          'image/gif',
        ];

        if (allowedMimes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(new Error('Invalid file type.'));
        }
      },
    };
  },
};
