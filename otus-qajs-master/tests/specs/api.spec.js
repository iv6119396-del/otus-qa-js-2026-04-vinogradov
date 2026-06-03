// Создание пользователя c ошибкой, логин уже используется
describe('loginIsBeing', () => {
    it('login is being', async () => {
      const response = await fetch('/Account/v1/User', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: "string",
          password: "string"
        })
      })
      const data = await response.json()

      expect(response.status).toEqual(404)
      expect(data.code).toBe(0)
      expect(data.message).toBe("string")
    })
})

// Создание пользователя c ошибкой, пароль не подходит
describe('passwordFit', () => {
    it('password fit', async () => {
      const response = await fetch('/Account/v1/User', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: "Ivan",
          password: ""
        })
      })
      const data = await response.json()

      expect(response.status).toEqual(404)
      expect(data.code).toBe(0)
      expect(data.message).toBe("string")
    })
})

//Создание пользователя успешно
describe('success', () => {
    it('success', async () => {
      const response = await fetch('/Account/v1/User', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: "Ivan",
          password: "Ivan"
        })
      })
      const data = await response.json()

      expect(response.status).toEqual(201)
    })
})

// Генерация токена c ошибкой
describe('tokenError', () => {
    it('token error', async () => {
      const response = await fetch('/Account/v1/GenerateToken/v1/User', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: "Ivan",
          password: "Iva"
        })
      })
      const data = await response.json()

      expect(response.status).toEqual(400)
    })
})

//Генерация токена успешно
describe('tokenSuccess', () => {
    it('token success', async () => {
      const response = await fetch('/Account/v1/GenerateToken/v1/User', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: "Ivan",
          password: "Ivan"
        })
      })
      const data = await response.json()

      expect(response.status).toEqual(200)
    })
})
