require('dotenv').config();
const aws = require('aws-sdk');
const fs = require('fs');
const Item = require('../models/item');

aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

const itemList = async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items.map((item) => item.toJSON()));
  } catch (error) {
    res.status(500).json('failed to fetch item list', error);
  }
};

const singleItem = async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item.toJSON());
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const createItem = async (req, res, next) => {
  let content = req.body.data;
  const item = await new Item({ ...content });
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.log('failed to save', error);
  }
};
//https://ademcan.net/blog/2017/11/24/uploaddownload-images-tofrom-aws-s3-in-react-native-a-step-by-step-guide/
///https://stackoverflow.com/questions/11240127/uploading-image-to-amazon-s3-with-html-javascript-jquery-with-ajax-request-n

function isEmpty(_obj) {
  return Object.keys(_obj.length === 0) ? true : false;
}

const uploadImg = async (req, res) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const S3_BUCKET = process.env.BUCKET;
  const img = req.files;
  const file = img[0].buffer;
  const size = img[0].fieldname;
  const item = req.body.name.replace(/\s+/g, ''); //remove all white space
  const fileName = size + item;

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    Body: file,
    ContentType: 'image/*',
    ACL: 'public-read',
  };

  try {
    s3.upload(params, (err, data) => {
      if (err) {
        throw err;
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
      console.log(returnData);
      res.status(200).json(JSON.stringify(returnData));
      res.end();
    });
  } catch (error) {
    res.status(400).json('failed to upload img', error);
  }
};

//need to check update
const updateItem = async (req, res) => {
  const id = req.params.id;
  const newObject = req.params.body;
  const updateItem = newItem({ ...newObject });
  const message = `${updatedItem.name} was succesfully update`;
  console.log('hello darkeness');
  try {
    await Item.findByIdAndUpdate(id, updateItem, { new: true });
    res.status(200).json(message, updateItem);
  } catch (error) {
    res.status(500).json('Failed to update item');
  }
};

//TODO: need to check this stuff?
const deleteItem = async (req, res) => {
  const id = req.params.id;
  const message = `${id} was successfully deleted`;
  try {
    await Item.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
    console.log('We deleted it');
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('fail to delete item', error);
  }
};

module.exports = {
  itemList,
  singleItem,
  createItem,
  updateItem,
  uploadImg,
  deleteItem,
};
