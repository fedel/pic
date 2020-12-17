# pic gui

## Install

    $ yarn install
    $ yarn start

## Desplegar

   $ yarn build
   $ yarn deploy


# PIC: Plataforma Integrada del Ciudadano

## Intro:

Es una plataforma para culaquier ciudadano que permiten gestionar las cuentas, tramites "a su alcance".
Las cuentas y tramites gestionables quedan definidas por Apoderamientos otorgados y Roles de Gestión.
Los reclamos gestionables son aquellos que le corresponde al perfil logueado.

La defincio de cuenta en PIC es amplia y configurable, puede hacer referencia  a una cuenta tributaria,
a una entrada en un padron, a una entidad administrada por otro sistema, etc.

Sobre una cuenta PIC se pueden realizar acciones de tres tipos:
  - Pagos de saldos
  - Transacciones de un solo paso. Con llamadas a sistemas externos.
  - Gestión mediante link a sistema externo que respete Token PIC.

El Token PIC queda definido por el siguiente estado:

Estado: Ejemplo donde Federico Luna gestiona sus cuentas y trámites
    Perfil: Federico Luna (Nivel 3)
    Gestionando a: Tu mismo
    Rol Pic: Ciudadano

Estado: Ejemplo donde Federico Luna gestiona Delia Valia mediante un apoderamiento:
    Perfil: Federico Luna (Nivel 3)
    Gestionando a: Delia Valia, con apoderamiento nro.....
    Rol Pic: Ciudadano


## Opciones del usuario

### Perfil
    * Datos Personales
    
    * Datos de Contacto
    
    * Gestion Nivel de Clave
        Verificacion de Indentidad (Nivel 3)
        acciones: Login Afip, 
        acciones: Iniciar Tramite Verificacion Identidad

### Gestionar a otra persona
    * Mis Roles Pic
        accion: Cambiar de Rol
        accion: Iniciar trámite de solicitud de Rol Pic

    * Solicitar apoderamiento a poderdante
        Ingresa cuil del poderante
        Ingresar cuenta pic a gestionar y accion a realizar
        O Ingresar tipo trámite a realizar

    * Lista de apoderamientos solicitados
        accion: buscar

    * Ver apoderamiento
        accion: Revocar, Solicitar Extender, Gestionar con este poder

    * Lista de apoderamientos donde soy poderdante
        Ver apoderamiento
        accion: Aprobar
        accion: Revocar

    * Nota: Ver como se relaciona la actual relación por cuit de afip, con los apoderamientos
            Podrián ser apoderamientos generados automáticamente 

### Notificaciones y Novedades
    * Se muestran los items que tienen de titular notificado al perfil logueado o, si tienen apoderamiento elegido, que tienen como titular notificado a la persona poderdante del apoderamiento.

    * Lista de notificaciones
    
    * Listo de Novedades
    
    * Ver Notificación
        Datos de la notificación
        accion: Link a documento
    
    * Ver Novedad
        Datos de la novedad
        accion: Link a elemento relacionado
        Ejemplo de novedades:
            Terminar el tramite
            Tenes un requisito observado
            Tenes una multa
            Existen nuevos convenios para tu cuenta
            Tu permiso esta por expirar

    * NOTA: cuando se emite una novedad o una notificación se realiza sobre un perfil (titular notificado) y sobre una cuenta pic, trámite o reclamo (objeto notificado). En tal caso se puede enviar un mensaje al titular y, si existe, al perfil del apoderado vigente sobre ese objeto notificado.

### Trámites y Reclamos
    * Lista de tramites y reclamos comenzados con indicadores de novedades y link
    
    * Se muestran los tramites que tienen de titular al perfil logueado o si tienen apoderamiento elegido que tienen como titular a la persona poderdante del apoderamiento. 
    
    * Cada item un link a para su gestion
        Item de Tramite, con link a gestion del tramite
        Item de Reclamo, con link a gestion del reclamo
    
    * Nuevo Reclamo (...)
    
    * Nuevo Trámite (va a la búsqueda de trámites)

### Mis Documentos
    * Se muestran los items que tienen de titular del documento al perfil logueado o, si tienen apoderamiento elegido, que tienen como titular del documento a la persona poderdante del apoderamiento.

    * Lista de documentos subidos por el ciudadano

    * Lista de documentos subidos por MR 

    * Todos los documentos tiene un titular de documento.

### Cuentas, Licencias y Servicios
    NOTA: Existen estos tipo de cuentas pic (algunos visibles en esta lista otros en la de comercio)
        * Cuentas tributarias:
            - TGI, NICHOS,
            - Analizar TRP, GRE, Espectaculos?
            - Se exlcuye DREI y cuentas SIAT que tiene como objimp un comercio (se gestionan en otro lado)
        * Cuentas de comercio (no se muestran en esta opcion, se muestran en la opcio Comercios)
        * Cuentas de sistema externos (mi bici tu bici)
        * Cuentas de PAC
        * cuentas de padrons Insripciones, Beneficios, etc (servicios)

    * Lista de items de cuentas pic del perfil logueado o que el poder elegido otorgue.
        Muestra información de la cuenta y alguna alerta, según el tipo de cuenta pic   
        accion: Gestionar para mostrar informacion y acciones de gestion

    * Item Tibutario (Origen Siat)
        Sobre Saldo: Muestra Saldos, Próximo Vencimiento, Pagos
        acciones: Pagar, Hacer Convenio

        Sobre Objeto: Muestras Permiso/Licencia, Próximo Vencimiento
        acciones: Renovar, Modificar (se resuelve localmente o en otro sistema mr, ej plataforma de empresas)

    * Item Licencia de Conducir:
        Sobre Saldo: Muestra multas
        acciones: Pagar, Gestionar (lleva a GAJ para otras acciones)

        Sobre Objeto:
        acciones: Alta Trámite Renovar  (se resuelve en sistema de trámites)
                
    * Item Mi Bici Tu Bici:
        Sobre saldo: Muestra saldo, depositar saldo, Ver Depositos
        Sobre objeto: Gestionar (lleva al sistema de mi bici tu bici)

    * Item PAC:
        Sobre objeto: Gesionar (lleva al pac)??

    * Item de padron:
        Sobre objeto: ???

    * Otras:
        ...
        ...

Comercios:
    accion: Gestionar mis en Plataforma de Empresa
    La plataforma de Gesion de Empresas debe soportar el estado de PIC:
    Perfil Logueado, Gestionado a, Rol Pic?



