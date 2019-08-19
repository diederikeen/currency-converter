import FixerKey from '../../secret/keys';

const buildURI = (obj) => {
  let uri = '';

  Object.keys(obj).forEach((key) => {
    if (key === 'endpoint') {
      uri = `http://data.fixer.io/api/${obj[key]}?access_key=${FixerKey}`;
    } else {
      uri += `&${key}=${obj[key]}`;
    }
  });

  return uri;
};

const FetchFixer = (uriParams, cbSucces, cbError) => {
  const uri = buildURI(uriParams);

  return new Promise((resolve, reject) => {
    fetch(uri, { method: 'get' })
      .then(res => res.json())
      .then((data) => {
        if (!data.success) {
          cbError(data.error);
          return;
        }
        resolve(data);
        cbSucces(data);
      })
      .catch(error => {
        reject(error);
        cbError(error);
      });
  });
};

export default FetchFixer;
