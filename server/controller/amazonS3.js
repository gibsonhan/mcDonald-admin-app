const { createS3SizeImgUrlObj } = require('../util/createS3ImgObj');
const { createS3SingleImgObj } = require('../util/createS3SingleImgObj	');

const uploadSingleImg = async (req, res) => {
  //TODO something with field name nees to change
  const CouponName = req.body.name.replace(/\s+/g, ''); //remove all white space
  const imgData = req.files[0].buffer;
  const response = await createS3SingleImgObj(imgData, CouponName);
  res.status(200).json(response);
};

const uploadMultiImg = async (req, res) => {
  const itemName = req.body.name.replace(/\s+/g, ''); //remove all white space
  const imgData = req.files;
  const response = await createS3SizeImgUrlObj(itemName, imgData);
  res.status(200).json(response);
};
