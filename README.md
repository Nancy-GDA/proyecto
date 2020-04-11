# Cut emprendedor
This is an application proyect for univercity.

## Run proyect
You have 2 options to execute proyect first one of this is to ensure have
node & mysql/mariadb installed.

Run app in a docker container.

Firstly you must to copy __.env.example__ file to __.env__ file, then fill out .env file
with the corresponds info.

## Run container

__*Run a db container*__
- Run db container
	```bash
		$ docker run --name cutDB -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mariadbdocker r
	```

Now you have to create a network to have capability to connect bouth containers
```bash
  $ docker network create --attachable cutnet
  $ docker network connect cutnet cutDB
```

__*Build and run app*__
- Build image
  ```bash
	$ docker build -t myimg .
  ```
- Run container
	```bash
	  $ docker run -rm -p 8080:8080 \
	  -v {$PWD}:/usr/src/app \
	  --name cutapp \
	  -e DB_HOST=cutDB \
	  yourimgbuilded
	```
> Variable {$PWD} is for get your current working directory
> Command above doesnt work on windows system

Finally attachable app container to network
```bash
  $ docker network connect cutnet cutapp
```


## Execute app commonly

Install npm dependencies

```bash
$ npm install
```
```bash
$ yarn install
```

Now just run command start for npm or yarn to run web server app.

```bash
$ npm start
```
```bash
$ yarn start
```


