import loginSlice, {
  setUserLogin,
  logOut
} from './loginSlice';

describe('login reducer', () => {
  const initialState = {
    status: 'idle',
    user:{
      imageUrl: '',
      email:'',
      name:''
    }
  };
  const loginState = {
    status: 'idle',
    user:{
      imageUrl: 'url',
      email:'use@prueba.com',
      name:'user'
    }
  };
  it('should handle initial state', () => {
    expect(loginSlice(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      user:{
        imageUrl: '',
        email:'',
        name:''
      }
    });
  });

  it('should handle setUserLogin google', () => {
    const actual = loginSlice(initialState, setUserLogin({
      imageUrl: 'url',
      email:'use@prueba.com',
      name:'user'
    }));
    expect(actual.user.imageUrl).toEqual('url');
    expect(actual.user.email).toEqual('use@prueba.com');
  });

  it('should handle setUserLogin facebook', () => {
    const actual = loginSlice(initialState, setUserLogin({
      picture: 'url',
      email:'use@prueba.com',
      name:'user'
    }));
    expect(actual.user.imageUrl).toEqual('url');
    expect(actual.user.email).toEqual('use@prueba.com');
  });

  it('should handle logOut', () => {
    const actual = loginSlice(loginState, logOut());
    expect(actual.user.imageUrl).toEqual('');
    expect(actual.user.email).toEqual('');
  });

});
