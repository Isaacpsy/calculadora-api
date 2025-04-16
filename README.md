# Calculadora API

Este es un proyecto simple de una API de calculadora construida con Node.js y el framework Express.js. Permite realizar operaciones aritméticas básicas a través de peticiones HTTP GET a diferentes rutas.

## Funcionalidades

La API actualmente soporta las siguientes operaciones:

* **Suma:** Suma dos números.
    * **Ruta:** `/sumar/:num1/:num2`
    * **Método:** `GET`
    * **Ejemplo:** `/sumar/5/3`
    * **Respuesta (JSON):**
        ```json
        {
            "resultado": 8
        }
        ```

* **Resta:** Resta el segundo número del primero.
    * **Ruta:** `/restar/:num1/:num2`
    * **Método:** `GET`
    * **Ejemplo:** `/restar/10/4`
    * **Respuesta (JSON):**
        ```json
        {
            "resultado": 6
        }
        ```

* **Multiplicación:** Multiplica dos números.
    * **Ruta:** `/multiplicar/:num1/:num2`
    * **Método:** `GET`
    * **Ejemplo:** `/multiplicar/2/6`
    * **Respuesta (JSON):**
        ```json
        {
            "resultado": 12
        }
        ```

* **División:** Divide el primer número por el segundo.
    * **Ruta:** `/dividir/:num1/:num2`
    * **Método:** `GET`
    * **Ejemplo:** `/dividir/15/3`
    * **Respuesta (JSON):**
        ```json
        {
            "resultado": 5
        }
        ```
    * **Manejo de error:** Intenta dividir por cero resultará en una respuesta con código de estado 400 y el siguiente JSON:
        ```json
        {
            "error": "No se puede dividir por cero."
        }
        ```

* **Ruta Raíz:** Proporciona un mensaje de bienvenida.
    * **Ruta:** `/`
    * **Método:** `GET`
    * **Respuesta (Texto):** `¡Bienvenido a la Calculadora API!`

## Cómo utilizar

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd calculadora-api # o el nombre de tu carpeta
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Ejecuta el servidor:**
    ```bash
    node server.js
    ```
    El servidor estará disponible en `http://localhost:3000`.

4.  **Realiza peticiones:** Utiliza tu navegador, `curl`, Postman o cualquier otra herramienta HTTP para enviar peticiones a las rutas definidas, reemplazando `:num1` y `:num2` con los números que deseas operar.

## Próximas mejoras

* Implementar más operaciones (potencia, módulo, etc.).
* Permitir operaciones mediante el método `POST` con los números en el cuerpo de la solicitud (JSON).
* Mejor manejo de errores y validación de entrada.
* Documentación más detallada (posiblemente con Swagger/OpenAPI).

## Contribución

Las contribuciones son bienvenidas. Si tienes alguna idea para mejorar esta API, no dudes en abrir un issue o enviar un pull request.
