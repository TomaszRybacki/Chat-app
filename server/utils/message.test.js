let expect = require('expect');

let { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let returnedObject = generateMessage('Tomasz', 'Test text');

    expect(returnedObject.from).toBe('Tomasz');
    expect(returnedObject.text).toBe('Test text');
    expect(returnedObject.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Tomasz';
    let latitude = 25;
    let longitude = 25;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let userLocation = generateLocationMessage(from, latitude, longitude);

    expect(userLocation.url).toBe(url);
    expect(userLocation.createdAt).toBeA('number');
    expect(userLocation).toInclude({ from, url });
  });
});
