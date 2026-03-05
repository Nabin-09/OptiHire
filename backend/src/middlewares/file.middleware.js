import multer from "multer";

export const uplaod = multer({
    storage : multer.memoryStorage(),
    limits : {
        fileSize : 7 * 1024 * 1024 //7MB
    }
})