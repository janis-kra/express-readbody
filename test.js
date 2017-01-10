/* eslint-disable node/no-unpublished-require */
const Readable = require('stream').Readable;
const test = require('ava');

const readBody = require('./index');

test('invalid argument', t => t.throws(
  () => readBody({}),
  TypeError,
  'should throw a TypeError if an invalid argument is passed'
));

test('read empty readable', (t) => {
  const rs = new Readable();
  const expected = '';
  const read = readBody(rs);
  rs.push(null);
  return read.then(body => t.is(body, expected));
});

test('read string from readable', (t) => {
  const rs = new Readable();
  const expected = 'readme!';
  const read = readBody(rs);
  rs.push(expected);
  rs.push(null);
  return read.then(body => t.is(body, expected));
});
