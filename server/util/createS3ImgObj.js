const aws = require('aws-sdk');
aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};
async function createS3SizeImgUrlObj(itemName, _arrayObj) {
  let promises = [];
  /**
   * Iterate through formData object
   *  - create a promise to handle image upload
   */
  await _arrayObj.map((obj, indx) => {
    const file = obj.buffer;
    const size = obj.fieldname;
    const fileName = size + itemName;
    const params = {
      Bucket: process.env.BUCKET,
      Key: fileName,
      Expires: 500,
      Body: file,
      ContentType: 'image/*',
      ACL: 'public-read',
    };

    const uploadImgPromise = new Promise((resolve, reject) => {
      const S3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      });

      S3.upload(params, (err, data) => {
        if (err) {
          reject({ [size]: 'no-image' });
        }
        resolve({
          [size]: `https://${process.env.BUCKET}.s3.amazonaws.com/${fileName}`,
        });
      });
    });

    promises.push(uploadImgPromise);
  });
  //TODO Can RxJS be applied here?
  /**
   *
   * Converts array of promise's return value into an object
   *  obj {
   *    [Key]: value
   *    [Size]: ['S3 image URL String']
   * }
   *
   */

  return converArrayToObj(promises);
}

async function converArrayToObj(_promiseArr) {
  let object = await Promise.all(_promiseArr).then((_arr) => {
    return _arr.reduce((acc, curr) => {
      let key = Object.keys(curr)[0];
      acc[key] = curr[key];
      return acc;
    }, {});
  });
  return object;
}

module.exports = {
  createS3SizeImgUrlObj,
};

/**Resource
//https://stackoverflow.com/questions/50085825/uploading-multiple-files-to-amazon-s3
 */
