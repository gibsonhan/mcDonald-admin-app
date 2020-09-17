const aws = require('aws-sdk');
aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

function createS3SingleImgObj(buffer, fileName) {
  const params = {
    Bucket: process.env.BUCKET,
    Key: fileName,
    Expires: 500,
    Body: buffer,
    ContentType: 'image/*',
    ACL: 'public-read',
  };

  return new Promise((resolve, reject) => {
    const S3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    S3.upload(params, (err, data) => {
      if (err) {
        reject('no-image');
      }
      resolve(`https://${process.env.BUCKET}.s3.amazonaws.com/${fileName}`);
    });
  });

  //TODO double check the error
}

module.exports = {
  createS3SingleImgObj,
};
