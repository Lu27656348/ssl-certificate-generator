

    openssl genrsa -out server.key 2048: Este comando genera una clave privada RSA de 2048 bits y
     la guarda en un archivo llamado server.key. La clave privada se utiliza para cifrar y descifrar 
     los datos que se envían entre el servidor y el cliente.

    openssl req -new -key server.key -out server.csr: Este comando genera una solicitud de firma de certificado (CSR) 
    utilizando la clave privada generada en el paso anterior. La solicitud de firma de certificado contiene información 
    sobre el servidor, como el nombre común y la organización, que se utilizará para generar el certificado.

    openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt: Este comando genera un certificado 
    autofirmado a partir de la solicitud de firma de certificado generada en el paso anterior. El certificado es válido por 365
     días y se guarda en un archivo llamado server.crt. El certificado autofirmado se utiliza para establecer la identidad del 
     servidor y permitir que los clientes verifiquen que están conectando con el servidor correcto.

Un cambio aquii