module.exports = function readBody (req) {
  if (typeof req !== 'object' || typeof req.on !== 'function') {
    throw new TypeError(`expected an instance of stream.Readable, got ${typeof req} instead`);
  }
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => resolve(body));
    req.on('error', e => reject(e));
  });
};
