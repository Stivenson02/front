//Acá se guarda el menu que se debe mostrar de acuerdo al perfil, columnas(perfiles) filas(menus)
export const MENUPORPERFIL: boolean[][] =
[		//[Desarrollador, Bases de Datos, Director Operativo, Coordinador, BackOffice, Auditor, Telemercaderista, Coordinador Auditoria, Tmk avanzado, Datamarshall, Tmk PureConnect, Agte. Claro Villas, Controller, Agente Web Center, Director Información, GNS
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], //0 Telemercadeo
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], //1 Reportes
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], //2 Backoffice
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//3 Agendamiento
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//4 Administrador
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//5 Auditoria
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//6 A3bpo
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//7 Formularios
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//8 Gestion Manual
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//9 Búsqueda Registros
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//10 Desocupar Registro
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//11 Asignación Bases
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//12 Cambio de Causal
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//13 Crear Nuevo Consumidor
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//14 Cambiar Prioridad Gestión
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//15 Crear Consumidores WebCenter
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//16 Seguimiento Metas
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//17 Reporte Gestión Agentes
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//18 Estadísticas Personales
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//19 Mis Telemercadeo
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//20 Histórico de Telemercadeo
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//21 Reporte Gestión Plugin
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//22 Detalle Gestión Base
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//23 Pendientes Gestionar
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//24 Recuperar Compra Cartera
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//25 Recuperación Donaciones
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//26 Reversión Donaciones
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//27 Registros Programados
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//28 Registros PostGestión
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//29 Búsqueda Gestión Registros
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//30 Recuperación Rechazos Auditoria
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//31 Agregar Tarjetas
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//32 Seguimiento Venta Tarjeta
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//33 Agregar Compras Cartera
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//34 Gestión Centro América
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//35 Gestión Fidelización
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//36 Recuperar Rediferido Consumo
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//37 Gestión Claro Portabilidad
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//38 Agregar Cuentas Desembolso
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//39 Seguimiento Fopep
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//40 Administrar Usuarios
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//41
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//42
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//43
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//44
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//45
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//46
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//47
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//48
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//49
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//50
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//51
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//52
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//53
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//54
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//55
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//56
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//57
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//58
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//59
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//60
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//61
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//62
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//63
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//64
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//65
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//66
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],	//67
	    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]	//68
];
