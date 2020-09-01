const { createS3SizeImgUrlObj } = require('../util/createS3ImgObj');
const S3 = require('../util/createS3SingleImgObj');

const uploadSingleImg = async (req, res) => {
  let imgName = req.body.name.replace(/\s+/g, ''); //remove all white space
  imgName = imgName.toLowerCase();
  const imgData = req.files[0].buffer;
  const response = await S3.createS3SingleImgObj(imgData, imgName);
  res.status(200).json(response);
};

const uploadMultiImg = async (req, res) => {
  const itemName = req.body.name.replace(/\s+/g, ''); //remove all white space
  const imgData = req.files;
  const response = await createS3SizeImgUrlObj(itemName, imgData);
  res.status(200).json(response);
};

module.exports = { uploadSingleImg, uploadMultiImg };
