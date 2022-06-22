export const config = {
  "dev": {
    "username": process.env.postgres_username,
    "password": process.env.postgres_password,
    "database": process.env.database_name,
    "host": process.env.host,
    "dialect": process.env.dialect,
    "aws_region": process.env.aws_region,
    "aws_profile": process.env.aws_profile,
    "aws_media_bucket": process.env.aws_media_bucket

  },
  "jwt": {
    "secret": "IYDUTERZFHDCRXD"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
