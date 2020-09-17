export default async function handleTimeOut(cb1, sec) {
  let promise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      cb1();
      resolve('Success');
    }, sec * 1000);
  });

  return promise;
}
