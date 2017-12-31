let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let returnedObject = generateMessage('Tomasz', 'Test text');

    expect(returnedObject.from).toBe('Tomasz');
    expect(returnedObject.text).toBe('Test text');
    expect(returnedObject.createdAt).toBeA('number')
  });
});
