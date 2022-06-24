import fs from "fs";
import Jimp = require("jimp");


// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = await Jimp.read(inputURL);
      const outpath =
        "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";
      await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(__dirname + outpath, (img) => {
          resolve(__dirname + outpath);
        });
    } catch (error) {
      reject(error);
    }
  });
  
//   return async function main() {
//   const image1 = await Jimp.read
// ('https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png');
//   const image2 = await Jimp.read
// ('https://media.geeksforgeeks.org/wp-content/uploads/20190328185333/gfg111.png');
  
//   //call to blit function 
//   image1.blit(image2, 20, 40)
//   //write image
//   .write('blit1.png');
//   console.log("Image Processing Completed");

// }
}
// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files: Array<string>) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}
