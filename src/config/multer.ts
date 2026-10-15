import multer from "multer";

// Usar o memoryStorage pra manter o arquivo em  memoria e enviar diretamente para o cloudinary...
export default {
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 4 * 1024 * 1024 // 5MB
    },
    fileFilter: (req: any, file: Express.Multer.File, callBack: any) => {
        const allowerdMimes = ["image/jpeg", "image/jpg", "image/png"]

        if(allowerdMimes.includes(file.mimetype)){
            callBack(null, true )
        }else{
            callBack(new Error("Formato de arquivo invalido, use apenas JPG,JPEG, PNG"))
        }
    }
}