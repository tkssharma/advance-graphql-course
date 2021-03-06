
# Learn Graphql 

https://www.youtube.com/playlist?list=PLIGDNOJWiL19ADhKRJF1KGB6LlRlzv4Nw

Good example for starter and learning GraphQL + Apollo Server + MongoDB + NodeJS easily and fastly. (Just in 10 minutes)

If you would like to read more, you can check out official documentation at [here](https://graphql.org/graphql-js/running-an-express-graphql-server/).

## Features

- MongoDB
- GraphQL
- ExpressJS
- Apollo Server

## Using

```
$ yarn install
$ yarn start
```

Then open `http://localhost:4000/graphql/`

## Select all Cats

```
{
  cats {
     id
     name
  }
}
```

![Mongodb - select all cats - Apollo GraphQL](screen1.png)

## Insert a new Model, Cat

```
mutation {
  createCat(name:"Max") {
    id
    name
  }
}
```

![mongodb - insert a new model cat - Apollo GraphQL](screen2.png)

## Similar Repository

- https://github.com/BaseMax/first-nodejs-graphql/

### References

- https://www.apollographql.com/docs/apollo-server/getting-started/
- https://www.apollographql.com/docs/apollo-server/schema/schema/
- https://github.com/apollographql/apollo-server
- https://github.com/graphql/express-graphql
- https://www.youtube.com/watch?v=YFkJGEefgU8

#### Did you encounter a problem in Babel?

The following link may be helpful:
https://stackoverflow.com/a/51530314/10096230

Change `"start": "nodemon --exec npm run babel-node index.js"` to `"start": "node ./node_modules/babel-cli/bin/babel-node.js --presets env index.js",`


### Installing Mongodb in Arch Linux

You can easily install MongoDB in Arch-base Linux by [following commands](https://stackoverflow.com/questions/59455725/install-mongodb-on-manjaro):

```
pamac search -a mongodb-bin
pamac info -a mongodb-bin
```

And, then build and install with (this can be done after manually cloning too) -

```
pamac build mongodb-bin
```

#### Did you encounter a problem in MongoDB?

As shown below, the service does not run and has an error.
This is a file access and execution error.
The easiest way is as follows:

```
[max@base first-nodejs-apollo-graphql]$ sudo systemctl status mongodb
??? mongodb.service - High-performance, schema-free document-oriented database
     Loaded: loaded (/usr/lib/systemd/system/mongodb.service; enabled; vendor preset: disabled)
     Active: failed (Result: exit-code) since Thu 2020-12-24 05:16:07 +0330; 4s ago
```

Modify `/usr/lib/systemd/system/mongodb.service` file.
However, manipulating these accesses is not recommended.

Anyway, You can change user from `mongodb` to `root` to solve this problem:

```
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=root
ExecStart=/usr/bin/mongod --quiet --config /etc/mongodb.conf

[Install]
WantedBy=multi-user.target
```

And then:

```
$ systemctl daemon-reload

$ sudo systemctl restart mongodb

$ sudo systemctl status mongodb
??? mongodb.service - High-performance, schema-free document-oriented database
     Loaded: loaded (/usr/lib/systemd/system/mongodb.service; enabled; vendor preset: disabled)
     Active: active (running) since Thu 2020-12-24 05:16:39 +0330; 2s ago

$ sudo systemctl enable mongodb
```
