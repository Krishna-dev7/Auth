import multer from "multer";

function createMulter(): multer.Multer {
  return multer({dest: "uploads/"});
}

export default createMulter;