import counterReducer, {
  emptyAuthor,
} from './authorSlice';

describe('author reducer', () => {
  const initialState = {
    author:{ id: "60d21b7067d0d8992e610d03", email: "dummyapi.io@dummyapi.io", phone: 454848},
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      author:{
        dateOfBirth: '',
        email: '',
        firstName: '',
        gender: '',
        id: '',
        lastName: '',
        location:{
          street: '', 
          city: '', 
          state: '',
          timezone: ''
        },
        phone: '',
        registerDate: '',
        updatedDate: ''
      },
      status: 'idle',
    });
  });

  it('should handle emptyAuthor', () => {
    const actual = counterReducer(initialState, emptyAuthor());
    expect(actual.author.id).toEqual('');
    expect(actual.author.email).toEqual('');
  });
});
