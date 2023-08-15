import calendarApi from "../../src/api/calendarApi";


describe('Tests in CalendarAPI', () => {

  test('Must have default configuration', () => {

    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
  })

  test('Must have the x-token in the header from all requests', async () => {

    const token = 'ABC-123-XYZ';
    localStorage.setItem('token', token);
    try {
      const res = await calendarApi.post('/auth', {
          email: 'test@test.com',
          password: '123456',
      });

      expect(res.config.headers['x-token']).toBe(token);

      } catch (error) {
          console.log(error.response.data);
      };

  })
});