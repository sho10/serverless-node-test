export default Object.assign({
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_USER: process.env.DATABASE_USER,
    SALT_ROUNDS: 10,
    AUTH_PUBLIC_KEY: process.env.AUTH_PUBLIC_KEY,
    AUTH_PRIVATE_KEY: process.env.AUTH_PRIVATE_KEY
})
