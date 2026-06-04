const APIController = require('./apiController');

describe('API Tests for JSONPlaceholder', () => {
  let api;

  beforeEach(() => {
    api = new APIController();
  });

  test('GET /posts — получение списка постов', async () => {
    const response = await api.get('/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('POST /posts — создание нового поста', async () => {
    const postData = {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1
    };
    const response = await api.post('/posts', postData);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(postData.title);
    expect(response.data.userId).toBe(postData.userId);
    expect(response.data.id).toBeDefined();
  });

  test('PUT /posts/1 — обновление существующего поста', async () => {
    const updateData = {
      title: 'Updated Post Title',
      body: 'Updated content'
    };
    const response = await api.put('/posts/1', updateData);
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(updateData.title);
  });

  test('DELETE /posts/1 — удаление поста', async () => {
    const response = await api.delete('/posts/1');
    expect(response.status).toBe(200);
    // JSONPlaceholder всегда возвращает 200 при удалении, даже если ресурс не существует
  });

  test('GET /posts/99999 — получение несуществующего поста', async () => {
    try {
      await api.get('/posts/99999');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
