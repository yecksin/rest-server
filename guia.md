# instalaciones
- npm i express
- npm i --save-dev @types/express  *Ayudas de express*
- npm install cors
- npm i --save-dev @types/cors *Ayudas de cors*
- npm i body-parser *Ya no se usa es express .17*

# Configurar ts
- tsc --init
- poner el dist en tsconfig 
      "outDir": "dist/",    
       "target": "es6", *mas opciones*


# Servidor
- creamos server con la clase server ya que llamar el puerto y toda la cosa
- lo importamos en el index el el server start

## Comandos

- nodemon dist/index.js
- tsc -watch