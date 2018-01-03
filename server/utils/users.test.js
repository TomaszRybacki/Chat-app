const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Tomasz',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Daniel',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Przemysław',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Tomasz',
      room: 'Geeks'
    };
    let responseUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    let userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Tomasz', 'Przemysław']);
  });

  it('should return names for react course', () => {
    let userList = users.getUserList('React Course');

    expect(userList).toEqual(['Daniel']);
  });

  it('should remove a user', () => {
    let user = users.removeUser('1');

    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let user = users.removeUser('4');

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let user = users.getUser('2');

    expect(user).toEqual({
      id: '2',
      name: 'Daniel',
      room: 'React Course'
    });
  });

  it('should not find user', () => {
    let user = users.getUser('4');

    expect(user).toBe(undefined);
  });
});


















