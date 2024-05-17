# Devops API App

# System Requirements

```
npm 8 or higher
node 16 or higher
```

## install the node packages for the api tier

```sh
→ npm install
```

## start the app

```sh
→ npm start
```

## NOTE this app uses two env variables

- PORT: optional variable to specify the listening PORT. Default is 3000
- DB: the postgresql url (also called as DB Connection string) to connect (syntax: `postgres://DB_USERNAME:DB_PASSWORD@DB_ENDPOINT/DB_NAME`).
    - DB_NAME should be equal to the database that was created inside the cluster either using `CREATE DATABASE ..` command or `db_name` parameter in Terraform for RDS (https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance#db_name).
    - Do not confuse with DB cluster/instance name, which is what shows up on AWS Console as a name for the database instances.

These two variables need to be set
