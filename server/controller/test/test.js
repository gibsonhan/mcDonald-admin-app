export default async function createS3SizeImgObj(_arrayObj) {
  let promise = [];
  /**
   * Iterate through formData object
   *  - create a promise to handle image upload
   *
   *
   */
  await _arrayObj.map((obj, indx) => {
    console.log('indx', indx);
    const file = obj.buffer;
    const size = obj.fieldname;
    const item = req.body.name.replace(/\s+/g, ''); //remove all white space
    const fileName = size + item;
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
  let object = await Promise.all(_promisesArr).then((_arr) => {
    return _arr.reduce((acc, curr) => {
      let key = Object.keys(curr)[0];
      acc[key] = curr[key];
      return acc;
    }, {});
  });
  return object;
}
