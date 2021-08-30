import counterReducer, {
  empyPosts,
} from './feedSlice';

describe('feed reducer', () => {
  const initialState = {
    post:[
      { id: "60d21b7067d0d8992e610d03", image: "https://img.dummyapi.io/photo-1574682847485-15ddf866794e.jpg", likes: 5}
    ],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      post:[],
      status: 'idle',
    });
  });

  it('should handle emptyPosts', () => {
    const actual = counterReducer(initialState, empyPosts());
    expect(actual.post.length).toEqual(0);
  });
});
