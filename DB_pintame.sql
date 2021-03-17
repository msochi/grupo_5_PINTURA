CREATE DATABASE  IF NOT EXISTS `pintame` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;
USE `pintame`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: pintame
-- ------------------------------------------------------
-- Server version	5.7.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` char(45) NOT NULL,
  `apellido` char(80) NOT NULL,
  `dni` int(11) NOT NULL,
  `direccion` text CHARACTER SET big5 NOT NULL,
  `id_localidad` int(10) unsigned NOT NULL,
  `codigoPostal` int(11) unsigned NOT NULL,
  `id_provincia` int(11) unsigned NOT NULL,
  `telefono` int(10) unsigned NOT NULL,
  `email` char(80) NOT NULL,
  `pass` text NOT NULL,
  `avatar` char(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_provincias_idx` (`id_provincia`),
  KEY `id_localidad_idx` (`id_localidad`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Marcelo Raúl','',17783576,'Uspallata 2288',0,1643,0,4294967295,'123@123123.com','','123@123123.com1613951625789.jpg'),(2,'Juan','',22333444,'Uspallata 2288',0,1643,0,4294967295,'juan@jaun.com','$2a$12$3jAKG3gYwfD1YDIxv7IixeLbC25LiHs0Xnh4eGKdnuDqz0fdj3XI6','juan@jaun.com1613952049401.jpg'),(3,'asda','sad',12345678,'sadads 45688',1,1754,1,1545678909,'asddasa@gmail.com','$2a$12$MGCDskppCLBY13QnO/Bb/up3ZSYxpK.vkcHGZfxKWs.8MsD6d2kjC','asddasa@gmail.com1615824954920.png'),(4,'NICOLAS','FERNANDEZ',34234234,'Coronel',782,1754,1,1564357234,'fernandez.nicolas.gonzalo@gmail.com','$2a$12$5SXSpyk0c1w6l6vUPSgy0ekZ3g7wCVuGX5FkTlyc/JFWoq6LWvRZK','fernandez.nicolas.gonzalo@gmail.com1615909470492.jpg'),(5,'NICOLAS','FERNANDEZ',12346780,'Coronel Lezica',1,1754,1,1234567890,'a@gmail.com','$2a$12$Unl0hObidLCWIRSjBcV7x.c7B20Vapr/UDxnN60OU5FBwB9fDnLfO','a@gmail.com1615917787187.jpg'),(6,'dfsg','dfsg',21342354,'sadads 456',1,1754,6,1567897654,'holis@gmail.com','$2a$12$L73TcXDRj1u7nQEIoEn4luTXLIlpE7YHpxOA97ZPmdD7CyyVGzIFS','holis@gmail.com1615935391365.jpg');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `familia`
--

DROP TABLE IF EXISTS `familia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `familia` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `familia` char(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `familia`
--

LOCK TABLES `familia` WRITE;
/*!40000 ALTER TABLE `familia` DISABLE KEYS */;
INSERT INTO `familia` VALUES (1,'HERRAMIENTAS Y ACCESORIOS'),(2,'Pinturas');
/*!40000 ALTER TABLE `familia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localidades`
--

DROP TABLE IF EXISTS `localidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localidades` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `localidad` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_provincia` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1714 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidades`
--

LOCK TABLES `localidades` WRITE;
/*!40000 ALTER TABLE `localidades` DISABLE KEYS */;
INSERT INTO `localidades` VALUES (1,'25 de Mayo',1),(2,'25 de Mayo',13),(3,'25 de Mayo',17),(4,'28 de Julio',5),(5,'7 de Abril',22),(6,'9 de Julio',1),(7,'9 de Julio',7),(8,'9 de Julio',13),(9,'9 de Julio',17),(10,'Aarón Castellanos',19),(11,'Abdón Castro Tolay',9),(12,'Abra Pampa',9),(13,'Abralaite',9),(14,'Abramo',10),(15,'Acebal',19),(16,'Acheral',22),(17,'Achiras',6),(18,'Aconquija',2),(19,'Adelia María',6),(20,'Adolfo Alsina',1),(21,'Adolfo Gonzales Chaves',1),(22,'Adolfo Van Praet',10),(23,'Agua de Oro',6),(24,'Aguada Cecilio',15),(25,'Aguada de Guerra',15),(26,'Aguada Guzman',15),(27,'Aguada San Roque',14),(28,'Aguará Grande',19),(29,'Aguaray',16),(30,'Aguas Calientes',9),(31,'Agustoni',10),(32,'Alba Posse',13),(33,'Albardón',17),(34,'Albarellos',19),(35,'Alberti',1),(36,'Alcira',6),(37,'Alcorta',19),(38,'Aldao',19),(39,'Aldea Beleiro',5),(40,'Aldea Santa María',6),(41,'Alejandra',19),(42,'Alejandro Roca',6),(43,'Alejo Ledesma',6),(44,'Algarrobo del Águila',10),(45,'Alicia',6),(46,'Allen',15),(47,'Almafuerte',6),(48,'Almafuerte',13),(49,'Almirante Brown',1),(50,'Alpa Corral',6),(51,'Alpachiri',10),(52,'Alpachiri y el Molino',22),(53,'Alta Gracia',6),(54,'Alta Italia',10),(55,'Alto Alegre',6),(56,'Alto de los Quebrachos',6),(57,'Alto Pencoso',18),(58,'Alto Río Senguer',5),(59,'Alto Verde y los Guchea',22),(60,'Altos de Chipión',6),(61,'Aluminé',14),(62,'Álvarez',19),(63,'Alvear',7),(64,'Alvear',19),(65,'Amaicha del Valle',22),(66,'Amboy',6),(67,'Ambrosetti',19),(68,'Ambul',6),(69,'Ameghino',13),(70,'Amenábar',19),(71,'Ana Zumarán',6),(72,'Ancasti',2),(73,'Anchorena',18),(74,'Andacollo',14),(75,'Andalgalá',2),(76,'Angaco',17),(77,'Angastaco',16),(78,'Angélica',19),(79,'Angeloni',19),(80,'Anguil',10),(81,'Animaná',16),(82,'Anisacate',6),(83,'Antofagasta de la Sierra',2),(84,'Añelo',14),(85,'Apolinario Saravia',16),(86,'Apóstoles',13),(87,'Arata',10),(88,'Arauco',11),(89,'Arcadia',22),(90,'Arequito',19),(91,'Arias',6),(92,'Aristóbulo del Valle',13),(93,'Arizona',18),(94,'Arminda',19),(95,'Armstrong',19),(96,'Arocena',19),(97,'Arrayanal',9),(98,'Arrecifes',1),(99,'Arroyito',6),(100,'Arroyo Aguiar',19),(101,'Arroyo Cabral',6),(102,'Arroyo Ceibal',19),(103,'Arroyo del Medio',13),(104,'Arroyo Leyes',19),(105,'Arroyo los Berros',15),(106,'Arroyo los Patos',6),(107,'Arroyo Seco',19),(108,'Arroyo Ventana',15),(109,'Arrufo',19),(110,'Arteaga',19),(111,'Assunta',6),(112,'Atahona',22),(113,'Ataliva',19),(114,'Ataliva Roca',10),(115,'Aurelia',19),(116,'Ausonia',6),(117,'Avellaneda',1),(118,'Avellaneda',6),(119,'Avellaneda',19),(120,'Avia Terai',4),(121,'Ayacucho',1),(122,'Azara',13),(123,'Azul',1),(124,'Bagual',18),(125,'Bahía Blanca',1),(126,'Bajada del Agrio',14),(127,'Balcarce',1),(128,'Balde',18),(129,'Ballesteros',6),(130,'Ballesteros Sud',6),(131,'Balnearia',6),(132,'Bañado de Soto',6),(133,'Baradero',1),(134,'Barrancas',14),(135,'Barrancas',19),(136,'Barranqueras',4),(137,'Barrios',9),(138,'Basail',4),(139,'Batavia',18),(140,'Bauer y Sigel',19),(141,'Beazley',18),(142,'Belén',2),(143,'Bell Ville',6),(144,'Bella Italia',19),(145,'Bella Vista',7),(146,'Bengolea',6),(147,'Benito Juárez',1),(148,'Benjamin Araoz y el Tajamar',22),(149,'Benjamín Gould',6),(150,'Berabevú',19),(151,'Berazategui',1),(152,'Berisso',1),(153,'Berna',19),(154,'Bernardo de Irigoyen',13),(155,'Bernardo de Irigoyen',19),(156,'Bernardo Larroude',10),(157,'Bernasconi',10),(158,'Berón de Astrada',7),(159,'Berrotarán',6),(160,'Bialet Massé',6),(161,'Bigand',19),(162,'Bolívar',1),(163,'Bombal',19),(164,'Bonpland',7),(165,'Bonpland',13),(166,'Bouquet',19),(167,'Bouwer',6),(168,'Bragado',1),(169,'Brandsen',1),(170,'Brinkmann',6),(171,'Buchardo',6),(172,'Buen Pasto',5),(173,'Buena Esperanza',18),(174,'Buena Vista',8),(175,'Bulnes',6),(176,'Bustinza',19),(177,'Buta Ranquil',14),(178,'Caá Catí',7),(179,'Caa Yarí',13),(180,'Cabal',19),(181,'Cabalango',6),(182,'Cachi',16),(183,'Cacique Ariacaiquín',19),(184,'Cafayate',16),(185,'Cafferata',19),(186,'Caimancito',9),(187,'Calchaquí',19),(188,'Calchín',6),(189,'Calchín Oeste',6),(190,'Caleufú',10),(191,'Calilegua',9),(192,'Calingasta',17),(193,'Calmayo',6),(194,'Camarones',5),(195,'Camilo Aldao',6),(196,'Caminiaga',6),(197,'Campana',1),(198,'Campo Andino',19),(199,'Campo Grande',13),(200,'Campo Grande',15),(201,'Campo Largo',4),(202,'Campo Quijano',16),(203,'Campo Ramón',13),(204,'Campo Santo',16),(205,'Campo Viera',13),(206,'Canals',6),(207,'Candelaria',13),(208,'Candelaria',18),(209,'Candelaria Sud',6),(210,'Candioti',19),(211,'Cangrejillos',9),(212,'Cañada de Gómez',19),(213,'Cañada de Luque',6),(214,'Cañada de Machado',6),(215,'Cañada de Río Pinto',6),(216,'Cañada del Sauce',6),(217,'Cañada del Ucle',19),(218,'Cañada Ombú',19),(219,'Cañada Rica',19),(220,'Cañada Rosquín',19),(221,'Cañuelas',1),(222,'Capayán',2),(223,'Capilla de los Remedios',6),(224,'Capilla del Carmen',6),(225,'Capilla del Monte',6),(226,'Capilla del Sitón',6),(227,'Capioví',13),(228,'Capital',11),(229,'Capital',12),(230,'Capitán Bermúdez',19),(231,'Capitan Caceres',22),(232,'Capitán General B. O\'Higgins',6),(233,'Capitán Sarmiento',1),(234,'Capitán Solari',4),(235,'Capivara',19),(236,'Caraguatay',13),(237,'Carcarañá',19),(238,'Carlos Casares',1),(239,'Carlos Pellegrini',19),(240,'Carlos Tejedor',1),(241,'Carmen',19),(242,'Carmen de Areco',1),(243,'Carmen del Sauce',19),(244,'Carnerillo',6),(245,'Carolina',7),(246,'Carolina',18),(247,'Carpinteria',18),(248,'Carrenleufú',5),(249,'Carreras',19),(250,'Carrilobo',6),(251,'Carrizales',19),(252,'Carro Quemado',10),(253,'Casa de Piedra',10),(254,'Casa Grande',6),(255,'Casalegno',19),(256,'Casas',19),(257,'Casilda',19),(258,'Caspalá',9),(259,'Castelar',19),(260,'Castellanos',19),(261,'Castelli',1),(262,'Castro Barros',11),(263,'Catriel',15),(264,'Catriló',10),(265,'Catua',9),(266,'Caucete',17),(267,'Cavanagh',6),(268,'Caviahue-Copahue',14),(269,'Cavour',19),(270,'Cayastá',19),(271,'Cayastacito',19),(272,'Ceballos',10),(273,'Centenario',14),(274,'Centeno',19),(275,'Cepeda',19),(276,'Ceres',19),(277,'Cerrillos',16),(278,'Cerro Azul',13),(279,'Cerro Colorado',6),(280,'Cerro Corá',13),(281,'Cervantes',15),(282,'Cevil Redondo',22),(283,'Chabas',19),(284,'Chacabuco',1),(285,'Chacharramendi',10),(286,'Chaján',6),(287,'Chamical',11),(288,'Chancaní',6),(289,'Chañar Ladeado',19),(290,'Chapuy',19),(291,'Charadai',4),(292,'Charata',4),(293,'Charbonier',6),(294,'Charras',6),(295,'Chascomús',1),(296,'Chavarría',7),(297,'Chazón',6),(298,'Chichinales',15),(299,'Chicoana',16),(300,'Chilecito',11),(301,'Chilibroste',6),(302,'Chimbas',17),(303,'Chimpay',15),(304,'Chivilcoy',1),(305,'Choele Choel',15),(306,'Cholila',5),(307,'Choromoro',22),(308,'Chorotis',4),(309,'Chorriaca',14),(310,'Chos Malal',14),(311,'Chovet',19),(312,'Christophersen',19),(313,'Chucul',6),(314,'Chuña',6),(315,'Ciénaga del Coro',6),(316,'Cieneguillas',9),(317,'Ciervo Petiso',4),(318,'Cinco Saltos',15),(319,'Cintra',6),(320,'Cipolletti',15),(321,'Clason',19),(322,'Clemente Onelli',15),(323,'Clorinda',8),(324,'Colalao del Valle',22),(325,'Colan Conhué',5),(326,'Colan Conhué',15),(327,'Colazo',6),(328,'Colombres',22),(329,'Colón',1),(330,'Colonia Alberdi',13),(331,'Colonia Aldao',19),(332,'Colonia Almada',6),(333,'Colonia Ana',19),(334,'Colonia Aurora',13),(335,'Colonia Barge',6),(336,'Colonia Barón',10),(337,'Colonia Belgrano',19),(338,'Colonia Benitez',4),(339,'Colonia Bicha',19),(340,'Colonia Bismarck',6),(341,'Colonia Bossi',19),(342,'Colonia Bremen',6),(343,'Colonia Carlos Pellegrini',7),(344,'Colonia Caroya',6),(345,'Colonia Cello',19),(346,'Colonia Delicia',13),(347,'Colonia Dolores',19),(348,'Colonia Durán',19),(349,'Colonia Italiana',6),(350,'Colonia Iturraspe',6),(351,'Colonia las Pichanas',6),(352,'Colonia Libertad',7),(353,'Colonia Liebig\'S',7),(354,'Colonia Margarita',19),(355,'Colonia Marina',6),(356,'Colonia Pando',7),(357,'Colonia Pastoril',8),(358,'Colonia Polana',13),(359,'Colonia Popular',4),(360,'Colonia Prosperidad',6),(361,'Colonia Raquel',19),(362,'Colonia Rosa',19),(363,'Colonia San Bartolomé',6),(364,'Colonia San Pedro',6),(365,'Colonia Santa María',10),(366,'Colonia Santa Rosa',7),(367,'Colonia Santa Rosa',16),(368,'Colonia Tirolesa',6),(369,'Colonia Valtelina',6),(370,'Colonia Vicente Agüero',6),(371,'Colonia Victoria',13),(372,'Colonia Videla',6),(373,'Colonia Vignaud',6),(374,'Colonia Wanda',13),(375,'Colonias Elisa',4),(376,'Colonias Unidas',4),(377,'Comallo',15),(378,'Comandante A. Guacurary',13),(379,'Comandante Fontana',8),(380,'Comechingones',6),(381,'Comico',15),(382,'Comodoro Rivadavia',5),(383,'Comuna Villa Belgrano',22),(384,'Cona Niyeu',15),(385,'Concaran',18),(386,'Concepción',7),(387,'Concepción de la Sierra',13),(388,'Concepción del Bermejo',4),(389,'Conhelo',10),(390,'Conlara',6),(391,'Constanza',19),(392,'Contralmirante Cordero',15),(393,'Coranzuli',9),(394,'Corcovado',5),(395,'Córdoba',6),(396,'Coronda',19),(397,'Coronel Arnold',19),(398,'Coronel Baigorria',6),(399,'Coronel Belisle',15),(400,'Coronel Bogado',19),(401,'Coronel de Marina Leonardo Rosales',1),(402,'Coronel Domínguez',19),(403,'Coronel Dorrego',1),(404,'Coronel Du Graty',4),(405,'Coronel Felipe Varela',11),(406,'Coronel Fraga',19),(407,'Coronel Hilario Lagos',10),(408,'Coronel Moldes',6),(409,'Coronel Moldes',16),(410,'Coronel Pringles',1),(411,'Coronel Suárez',1),(412,'Corpus',13),(413,'Corral de Bustos',6),(414,'Corral Quemado',2),(415,'Corralito',6),(416,'Correa',19),(417,'Corrientes',7),(418,'Cortaderas',18),(419,'Corzuela',4),(420,'Cosquín',6),(421,'Costasacate',6),(422,'Cote Lai',4),(423,'Crispi',19),(424,'Cruz Alta',6),(425,'Cruz de Caña',6),(426,'Cruz de los Milagros',7),(427,'Cruz del Eje',6),(428,'Cuchillo Có',10),(429,'Cuesta Blanca',6),(430,'Cululú',19),(431,'Curupaity',19),(432,'Curuzú Cuatiá',7),(433,'Cushamen',5),(434,'Cusi Cusi',9),(435,'Cutral Có',14),(436,'Daireaux',1),(437,'Dalmacio Vélez',6),(438,'Darwin',15),(439,'Deán Funes',6),(440,'Del Campillo',6),(441,'Delfin Gallo',22),(442,'Desaguadero',18),(443,'Despeñaderos',6),(444,'Desvío Arijón',19),(445,'Devoto',6),(446,'Díaz',19),(447,'Diego de Alvear',19),(448,'Diego de Rojas',6),(449,'Dina Huapi',15),(450,'Dique Chico',6),(451,'Dique Florentino Ameghino',5),(452,'Doblas',10),(453,'Doctor Ricardo Rojas',5),(454,'Dolavon',5),(455,'Dolores',1),(456,'Dorila',10),(457,'Dos Arroyos',13),(458,'Dos de Mayo',13),(459,'Dr. Atilio Oscar Viglione',5),(460,'Eduardo Castex',10),(461,'Egusquiza',19),(462,'El Aguilar',9),(463,'El Alcázar',13),(464,'El Alto',2),(465,'El Arañado',6),(466,'El Arazá',19),(467,'El Bolson',15),(468,'El Bordo',16),(469,'El Bracho y el Cevilar',22),(470,'El Brete',6),(471,'El Cadillal',22),(472,'El Cain',15),(473,'El Carmen',9),(474,'El Carril',16),(475,'El Chacho',6),(476,'El Chañar',22),(477,'El Cholar',14),(478,'El Colorado',8),(479,'El Cóndor',9),(480,'El Crispín',6),(481,'El Cuy',15),(482,'El Fortín',6),(483,'El Fuerte',9),(484,'El Galpón',16),(485,'El Hoyo',5),(486,'El Huecú',14),(487,'El Jardín',16),(488,'El Maitén',5),(489,'El Manantial',22),(490,'El Manso',15),(491,'El Manzano',6),(492,'El Mollar',22),(493,'El Naranjo y el Sunchal',22),(494,'El Piquete',9),(495,'El Potrero',16),(496,'El Quebrachal',16),(497,'El Rabón',19),(498,'El Rastreador',6),(499,'El Rodeo',2),(500,'El Rodeo',6),(501,'El Sauce',14),(502,'El Sauzalito',4),(503,'El Soberbio',13),(504,'El Tala',16),(505,'El Talar',9),(506,'El Tío',6),(507,'El Trapiche',18),(508,'El Trébol',19),(509,'El Volcan',18),(510,'Eldorado',13),(511,'Elena',6),(512,'Elisa',19),(513,'Elortondo',19),(514,'Embajador Martini',10),(515,'Embalse',6),(516,'Embarcación',16),(517,'Emilia',19),(518,'Empalme San Carlos',19),(519,'Empalme Villa Constitución',19),(520,'Empedrado',7),(521,'Enrique Urien',4),(522,'Ensenada',1),(523,'Epuyén',5),(524,'Escobar',1),(525,'Esmeralda',19),(526,'Esperanza',19),(527,'Espinillo',8),(528,'Esquel',5),(529,'Esquina',6),(530,'Esquina',7),(531,'Estacion Araoz y Tacanas',22),(532,'Estación Clucellas',19),(533,'Estación General Paz',6),(534,'Estación Juárez Celman',6),(535,'Estación Torrent',7),(536,'Estancia de Guadalupe',6),(537,'Estancia Grande',18),(538,'Estancia Vieja',6),(539,'Estanislao del Campo',8),(540,'Esteban Echeverría',1),(541,'Esteban Rams',19),(542,'Esther',19),(543,'Etruria',6),(544,'Eufrasio Loza',6),(545,'Eusebia y Carolina',19),(546,'Eustolia',19),(547,'Exaltación de la Cruz',1),(548,'Ezeiza',1),(549,'Facundo',5),(550,'Falda del Carmen',6),(551,'Falucho',10),(552,'Famatina',11),(553,'Felicia',19),(554,'Felipe Yofré',7),(555,'Fiambalá',2),(556,'Fighiera',19),(557,'Firmat',19),(558,'Florencia',19),(559,'Florencio Varela',1),(560,'Florentino Ameghino',1),(561,'Fontana',4),(562,'Formosa',8),(563,'Fortin el Patria',18),(564,'Fortín Lugones',8),(565,'Fortín Olmos',19),(566,'Fortuna',18),(567,'Fraga',18),(568,'Fraile Pintado',9),(569,'Franck',19),(570,'Fray Luis Beltrán',19),(571,'Fray Mamerto Esquiú',2),(572,'Freyre',6),(573,'Frontera',19),(574,'Fuentes',19),(575,'Fuerte Esperanza',4),(576,'Funes',19),(577,'Gaboto',19),(578,'Gaiman',5),(579,'Gálvez',19),(580,'Gan Gan',5),(581,'Gancedo',4),(582,'Garabato',19),(583,'Garibaldi',19),(584,'Garmendia',22),(585,'Garruchos',7),(586,'Garuhapé',13),(587,'Garupá',13),(588,'Gastre',5),(589,'Gato Colorado',19),(590,'Gdor. Piedrabuena',22),(591,'General Acha',10),(592,'General Alvarado',1),(593,'General Alvear',1),(594,'General Alvear',12),(595,'General Ángel Vicente Peñaloza',11),(596,'General Arenales',1),(597,'General Baldissera',6),(598,'General Ballivián',16),(599,'General Belgrano',1),(600,'General Belgrano',8),(601,'General Belgrano',11),(602,'General Cabrera',6),(603,'General Campos',10),(604,'General Capdevila',4),(605,'General Deheza',6),(606,'General Fotheringham',6),(607,'General Gelly',19),(608,'General Güemes',8),(609,'General Güemes',16),(610,'General Guido',1),(611,'General J. J. Urquiza',13),(612,'General Juan Facundo Quiroga',11),(613,'General Juan Madariaga',1),(614,'General la Madrid',1),(615,'General Lagos',19),(616,'General Lamadrid',11),(617,'General las Heras',1),(618,'General Lavalle',1),(619,'General Levalle',6),(620,'General Lucio Victorio Mansilla',8),(621,'General Mosconi',8),(622,'General Mosconi',16),(623,'General Ocampo',11),(624,'General Paz',1),(625,'General Pico',10),(626,'General Pinedo',4),(627,'General Pinto',1),(628,'General Pizarro',16),(629,'General Pueyrredón',1),(630,'General Roca',6),(631,'General Rodríguez',1),(632,'General San Martín',1),(633,'General San Martín',10),(634,'General San Martín',11),(635,'General Vedia',4),(636,'General Viamonte',1),(637,'General Villegas',1),(638,'Gessler',19),(639,'Gobernador Costa',5),(640,'Gobernador Crespo',19),(641,'Gobernador Duval',10),(642,'Gobernador Ing. Valentín Virasoro',7),(643,'Gobernador López',13),(644,'Gobernador Martínez',7),(645,'Gobernador Roca',13),(646,'Gödeken',19),(647,'Godoy',19),(648,'Godoy Cruz',12),(649,'Golondrina',19),(650,'Goya',7),(651,'Gral. Alvear',13),(652,'Gral. Conesa',15),(653,'Gral. Enrique Godoy',15),(654,'Gral. Fdez. Oro',15),(655,'Gral. Roca',15),(656,'Gral. San Martengeneral San Martín',4),(657,'Gran Guardia',8),(658,'Granadero Baigorria',19),(659,'Gregoria Pérez de Denis',19),(660,'Grutly',19),(661,'Guachipas',16),(662,'Guadalupe Norte',19),(663,'Gualjaina',5),(664,'Guaminí',1),(665,'Guanaco Muerto',6),(666,'Guaraní',13),(667,'Guardia Mitre',15),(668,'Guasapampa',6),(669,'Guatimozín',6),(670,'Guatraché',10),(671,'Guaviraví',7),(672,'Guaymallén',12),(673,'Gütemberg',6),(674,'Helvecia',19),(675,'Hermoso Campo',4),(676,'Hernando',6),(677,'Herradura',8),(678,'Hersilia',19),(679,'Hipatía',19),(680,'Hipólito Irigoyen',13),(681,'Hipólito Yrigoyen',1),(682,'Hipólito Yrigoyen',9),(683,'Hipólito Yrigoyen',16),(684,'Huacalera',9),(685,'Hualfín',2),(686,'Huanchilla',6),(687,'Huanqueros',19),(688,'Huerta Grande',6),(689,'Hughes',19),(690,'Huillapima',2),(691,'Huinca Renancó',6),(692,'Huinganco',14),(693,'Humahuaca',9),(694,'Humberto Primo',19),(695,'Humboldt',19),(696,'Hurlingham',1),(697,'Ibarlucea',19),(698,'Ibarreta',8),(699,'Icaño',2),(700,'Idiazabal',6),(701,'Iglesia',17),(702,'Iguazú',13),(703,'Impira',6),(704,'Independencia',11),(705,'Ing. Jacobacci',15),(706,'Ingeniero Chanourdie',19),(707,'Ingeniero Guillermo N. Juárez',8),(708,'Ingeniero Huergo',15),(709,'Ingeniero Luiggi',10),(710,'Inriville',6),(711,'Intendente Alvear',10),(712,'Intiyaco',19),(713,'Iruya',16),(714,'Isla de Cañas',16),(715,'Isla del Cerrito',4),(716,'Isla Verde',6),(717,'Itá Ibaté',7),(718,'Itacaruaré',13),(719,'Italó',6),(720,'Itatí',7),(721,'Ituzaingó',1),(722,'Ituzaingó',7),(723,'Jáchal',17),(724,'Jacinto Arauz',10),(725,'Jacinto L. Arauz',19),(726,'James Craik',6),(727,'Jardín América',13),(728,'Jesús María',6),(729,'Joaquín V. González',16),(730,'José C. Paz',1),(731,'José de San Martín',5),(732,'Jose Rafael Gomez',7),(733,'Josefina',19),(734,'Jovita',6),(735,'Juan Bernabé Molina',19),(736,'Juan Jorba',18),(737,'Juan José Castelli',4),(738,'Juan Llerena',18),(739,'Juan Pujol',7),(740,'Juana Koslay',18),(741,'Juncal',19),(742,'Junín',1),(743,'Junín',12),(744,'Junín de los Andes',14),(745,'Justiniano Posse',6),(746,'Justo Daract',18),(747,'Kilómetro 658',6),(748,'La Adela',10),(749,'La Adela',15),(750,'La Brava',19),(751,'La Cabral',19),(752,'La Caldera',16),(753,'La Calera',6),(754,'La Calera',18),(755,'La Candelaria',16),(756,'La Carlota',6),(757,'La Carolina \"El Potosi\"',6),(758,'La Cautiva',6),(759,'La Cesira',6),(760,'La Chispa',19),(761,'La Clotilde',4),(762,'La Costa',1),(763,'La Criolla',19),(764,'La Cruz',6),(765,'La Cruz',7),(766,'La Cumbre',6),(767,'La Cumbrecita',6),(768,'La Eduvigis',4),(769,'La Escondida',4),(770,'La Esperanza',9),(771,'La Falda',6),(772,'La Florida y Luisiana',22),(773,'La Francia',6),(774,'La Gallareta',19),(775,'La Granja',6),(776,'La Higuera',6),(777,'La Humada',10),(778,'La Laguna',6),(779,'La Leonesa',4),(780,'La Lucila',19),(781,'La Maruja',10),(782,'La Matanza',1),(783,'La Mendieta',9),(784,'La Merced',16),(785,'La Paisanita',6),(786,'La Palestina',6),(787,'La Pampa',6),(788,'La Paquita',6),(789,'La Para',6),(790,'La Paz',6),(791,'La Paz',12),(792,'La Pelada',19),(793,'La Penca y Caraguatá',19),(794,'La Plata',1),(795,'La Playa',6),(796,'La Playosa',6),(797,'La Población',6),(798,'La Poma',16),(799,'La Posta',6),(800,'La Puerta',2),(801,'La Puerta',6),(802,'La Punilla',18),(803,'La Punta',18),(804,'La Quiaca',9),(805,'La Quinta',6),(806,'La Ramada y la Cruz',22),(807,'La Reforma',10),(808,'La Rubia',19),(809,'La Sarita',19),(810,'La Serranita',6),(811,'La Tigra',4),(812,'La Toma',18),(813,'La Tordilla',6),(814,'La Vanguardia',19),(815,'La Verde',4),(816,'La Viña',16),(817,'Laborde',6),(818,'Labordeboy',19),(819,'Laboulaye',6),(820,'Lafinur',18),(821,'Lago Puelo',5),(822,'Laguna Blanca',4),(823,'Laguna Blanca',8),(824,'Laguna Blanca',15),(825,'Laguna Larga',6),(826,'Laguna Limpia',4),(827,'Laguna Naik Neck',8),(828,'Laguna Paiva',19),(829,'Laguna Yema',8),(830,'Lamadrid',22),(831,'Lamarque',15),(832,'Landeta',19),(833,'Lanteri',19),(834,'Lanús',1),(835,'Lapachito',4),(836,'Laprida',1),(837,'Larrechea',19),(838,'Las Acequias',6),(839,'Las Aguadas',18),(840,'Las Albahacas',6),(841,'Las Arrias',6),(842,'Las Avispas',19),(843,'Las Bajadas',6),(844,'Las Bandurrias',19),(845,'Las Breñas',4),(846,'Las Caleras',6),(847,'Las Calles',6),(848,'Las Cejas',22),(849,'Las Chacras',18),(850,'Las Coloradas',14),(851,'Las Flores',1),(852,'Las Garcitas',4),(853,'Las Garzas',19),(854,'Las Heras',12),(855,'Las Higueras',6),(856,'Las Isletillas',6),(857,'Las Juntas',2),(858,'Las Junturas',6),(859,'Las Lagunas',18),(860,'Las Lajas',14),(861,'Las Lajitas',16),(862,'Las Lomitas',8),(863,'Las Ovejas',14),(864,'Las Palmas',4),(865,'Las Palmeras',19),(866,'Las Parejas',19),(867,'Las Peñas',6),(868,'Las Peñas Sud',6),(869,'Las Perdices',6),(870,'Las Petacas',19),(871,'Las Playas',6),(872,'Las Plumas',5),(873,'Las Rabonas',6),(874,'Las Rosas',19),(875,'Las Saladas',6),(876,'Las Tapias',6),(877,'Las Toscas',19),(878,'Las Tunas',19),(879,'Las Varas',6),(880,'Las Varillas',6),(881,'Las Vertientes',6),(882,'Las Vertientes',18),(883,'Lavaisse',18),(884,'Lavalle',7),(885,'Lavalle',12),(886,'Lazzarino',19),(887,'Leandro N. Alem',1),(888,'Leandro N. Alem',13),(889,'Leandro N. Alem',18),(890,'Leguizamón',6),(891,'Lehmann',19),(892,'Leon Rouges y Santa Rosa',22),(893,'Leones',6),(894,'Leoni',13),(895,'Lezama',1),(896,'Libertad',13),(897,'Libertador General San Martín',9),(898,'Limay Mahuida',10),(899,'Lincoln',1),(900,'Llambi Campbell',19),(901,'Lobería',1),(902,'Lobos',1),(903,'Logroño',19),(904,'Loma Alta',19),(905,'Lomas de Vallejos',7),(906,'Lomas de Zamora',1),(907,'Loncopué',14),(908,'Londres',2),(909,'Lonquimay',10),(910,'López',19),(911,'Loreto',7),(912,'Loreto',13),(913,'Los Altares',5),(914,'Los Altos',2),(915,'Los Amores',19),(916,'Los Cardos',19),(917,'Los Catutos',14),(918,'Los Cedros',6),(919,'Los Cerrillos',6),(920,'Los Chañaritos',6),(921,'Los Chañaritos (C.D. Eje)',6),(922,'Los Chiriguanos',8),(923,'Los Cisnes',6),(924,'Los Cocos',6),(925,'Los Cóndores',6),(926,'Los Frentones',4),(927,'Los Helechos',13),(928,'Los Hornillos',6),(929,'Los Hoyos',6),(930,'Los Laureles',19),(931,'Los Menucos',15),(932,'Los Miches',14),(933,'Los Mistoles',6),(934,'Los Molinos',6),(935,'Los Molinos',19),(936,'Los Molles',18),(937,'Los Nogales',22),(938,'Los Perez',22),(939,'Los Pozos',6),(940,'Los Puestos',22),(941,'Los Quirquinchos',19),(942,'Los Ralos',22),(943,'Los Reartes',6),(944,'Los Sarmiento y la Tipa',22),(945,'Los Surgentes',6),(946,'Los Toldos',16),(947,'Los Varela',2),(948,'Los Zorros',6),(949,'Loventué',10),(950,'Lozada',6),(951,'Luan Toro',10),(952,'Luca',6),(953,'Lucio V. López',19),(954,'Lucio V. Mansilla',6),(955,'Luis Beltran',15),(956,'Luis Palacios',19),(957,'Lujan',18),(958,'Luján',1),(959,'Luján de Cuyo',12),(960,'Luque',6),(961,'Lutti',6),(962,'Luyaba',6),(963,'M9Ximo Paz',19),(964,'Macachín',10),(965,'Machagai',4),(966,'Maciel',19),(967,'Magdalena',1),(968,'Maggiolo',19),(969,'Maimará',9),(970,'Mainque',15),(971,'Maipú',1),(972,'Maipú',12),(973,'Maisonnave',10),(974,'Makallé',4),(975,'Malabrigo',19),(976,'Malagueño',6),(977,'Malargüe',12),(978,'Malena',6),(979,'Malvinas Argentinas',1),(980,'Malvinas Argentinas',6),(981,'Mamuel Choique',15),(982,'Manfredi',6),(983,'Manuel Garcia Fernandez',22),(984,'Manzano Amargo',14),(985,'Maquinchao',15),(986,'Maquinista Gallini',6),(987,'Mar Chiquita',1),(988,'Marcelino Escalada',19),(989,'Marcos Juárez',6),(990,'Marcos Paz',1),(991,'Margarita',19),(992,'Margarita Belén',4),(993,'María Juana',19),(994,'María Luisa',19),(995,'María Susana',19),(996,'María Teresa',19),(997,'Mariano I. Loza',7),(998,'Mariano Moreno',14),(999,'Mártires',13),(1000,'Marull',6),(1001,'Matilde',19),(1002,'Matorrales',6),(1003,'Mattaldi',6),(1004,'Mauricio Mayer',10),(1005,'Mayor Vicente E. Villafañe',8),(1006,'Mayu Sumaj',6),(1007,'Mburucuyá',7),(1008,'Media Naranja',6),(1009,'Medina',22),(1010,'Melincué',19),(1011,'Melo',6),(1012,'Mencuen',15),(1013,'Mendiolaza',6),(1014,'Mercedes',1),(1015,'Mercedes',7),(1016,'Merlo',1),(1017,'Merlo',18),(1018,'Metán',16),(1019,'Metileo',10),(1020,'Mi Granja',6),(1021,'Miguel Cané',10),(1022,'Miguel Riglos',10),(1023,'Miguel Torres',19),(1024,'Mina Clavero',6),(1025,'Mina Pirquitas',9),(1026,'Ministro Ramos Mexia',15),(1027,'Miraflores',4),(1028,'Miramar',6),(1029,'Misión Nueva Pompeya',4),(1030,'Misión San Francisco de Laishí',8),(1031,'Misión Taacaglé',8),(1032,'Mocoretá',7),(1033,'Moisés Ville',19),(1034,'Mojón Grande',13),(1035,'Molinos',16),(1036,'Monigotes',19),(1037,'Monje',19),(1038,'Monte',1),(1039,'Monte Buey',6),(1040,'Monte Caseros',7),(1041,'Monte Cristo',6),(1042,'Monte de los Gauchos',6),(1043,'Monte Hermoso',1),(1044,'Monte Leña',6),(1045,'Monte Maíz',6),(1046,'Monte Nievas',10),(1047,'Monte Ralo',6),(1048,'Monte Vera',19),(1049,'Monteagudo',22),(1050,'Montecarlo',13),(1051,'Montefiore',19),(1052,'Monterrico',9),(1053,'Montes de Oca',19),(1054,'Moreno',1),(1055,'Morón',1),(1056,'Morrison',6),(1057,'Morteros',6),(1058,'Municipalidad de Aguilares',22),(1059,'Municipalidad de Alderetes',22),(1060,'Municipalidad de Banda del Rio Sali',22),(1061,'Municipalidad de Bella Vista',22),(1062,'Municipalidad de Burruyacu',22),(1063,'Municipalidad de Concepcion',22),(1064,'Municipalidad de Famailla',22),(1065,'Municipalidad de Graneros',22),(1066,'Municipalidad de Juan Bautista Alberdi',22),(1067,'Municipalidad de la Cocha',22),(1068,'Municipalidad de las Talitas',22),(1069,'Municipalidad de Lules',22),(1070,'Municipalidad de Monteros',22),(1071,'Municipalidad de San Miguel De Tucuman',22),(1072,'Municipalidad de Simoca',22),(1073,'Municipalidad de Tafi del Valle',22),(1074,'Municipalidad de Tafi Viejo',22),(1075,'Municipalidad de Trancas',22),(1076,'Municipalidad de Yerba Buena',22),(1077,'Murphy',19),(1078,'Mutquín',2),(1079,'Nahuel Niyeu',15),(1080,'Napenay',4),(1081,'Naré',19),(1082,'Naschel',18),(1083,'Naupa Huen',15),(1084,'Navarro',1),(1085,'Navia',18),(1086,'Nazareno',16),(1087,'Necochea',1),(1088,'Nelson',19),(1089,'Neuquén',14),(1090,'Nicolás Bruzzone',6),(1091,'Noetinger',6),(1092,'Nogoli',18),(1093,'Nono',6),(1094,'Nueva Galia',18),(1095,'Nuevo Torino',19),(1096,'Ñanducita',19),(1097,'Ñorquinco',15),(1098,'Oberá',13),(1099,'Obispo Trejo',6),(1100,'Octavio Pico',14),(1101,'Ojos de Agua',15),(1102,'Olaeta',6),(1103,'Olavarría',1),(1104,'Olegario V. Andrade',13),(1105,'Oliva',6),(1106,'Olivares de San Nicolás',6),(1107,'Oliveros',19),(1108,'Onagoity',6),(1109,'Oncativo',6),(1110,'Ordóñez',6),(1111,'P. de los Funes',18),(1112,'Pacheco de Melo',6),(1113,'Paclín',2),(1114,'Palacios',19),(1115,'Palma Sola',9),(1116,'Palmar Grande',7),(1117,'Palo Santo',8),(1118,'Palpalá',9),(1119,'Pampa Almirón',4),(1120,'Pampa Blanca',9),(1121,'Pampa del Indio',4),(1122,'Pampa del Infierno',4),(1123,'Pampayasta Norte',6),(1124,'Pampayasta Sud',6),(1125,'Pampichuela',9),(1126,'Panaholma',6),(1127,'Panambí',13),(1128,'Papagayos',18),(1129,'Parada Pucheta',7),(1130,'Parera',10),(1131,'Pascanas',6),(1132,'Pasco',6),(1133,'Paso Aguerre',14),(1134,'Paso de Indios',5),(1135,'Paso de la Patria',7),(1136,'Paso de los Libres',7),(1137,'Paso del Durazno',6),(1138,'Paso del Sapo',5),(1139,'Paso Grande',18),(1140,'Patagones',1),(1141,'Pavón',19),(1142,'Pavón Arriba',19),(1143,'Payogasta',16),(1144,'Pedro Gómez Cello',19),(1145,'Pedro R. Fernández',7),(1146,'Pehuajó',1),(1147,'Pellegrini',1),(1148,'Peñas Blancas',15),(1149,'Pérez',19),(1150,'Pergamino',1),(1151,'Perico',9),(1152,'Perú',10),(1153,'Perugorría',7),(1154,'Peyrano',19),(1155,'Piamonte',19),(1156,'Pichanal',16),(1157,'Pichi Huinca',10),(1158,'Picún Leufú',14),(1159,'Piedra del Águila',14),(1160,'Pila',1),(1161,'Pilar',1),(1162,'Pilar',6),(1163,'Pilar',19),(1164,'Pilcaniyeu',15),(1165,'Pilquiniyeu',15),(1166,'Pilquiniyeu del Limay',15),(1167,'Pinamar',1),(1168,'Pincen',6),(1169,'Piñero',19),(1170,'Piquillín',6),(1171,'Pirané',8),(1172,'Plaza Clucellas',19),(1173,'Plaza de Mercedes',6),(1174,'Plaza Huincul',14),(1175,'Plaza Luxardo',6),(1176,'Plottier',14),(1177,'Pocito',17),(1178,'Pomán',2),(1179,'Pomona',15),(1180,'Porteña',6),(1181,'Portón Negro',8),(1182,'Posadas',13),(1183,'Potrero de Garay',6),(1184,'Pozo Borrado',19),(1185,'Pozo de Piedra',2),(1186,'Pozo del Molle',6),(1187,'Pozo del Tigre',8),(1188,'Pozo Nuevo',6),(1189,'Prahuaniyeu',15),(1190,'Presidencia de la Plaza',4),(1191,'Presidencia Roca',4),(1192,'Presidencia Roque Sáenz Peña',4),(1193,'Presidente Perón',1),(1194,'Presidente Roca',19),(1195,'Profesor Salvador Mazza',16),(1196,'Profundidad',13),(1197,'Progreso',19),(1198,'Providencia',19),(1199,'Puán',1),(1200,'Pueblo Andino',19),(1201,'Pueblo Esther',19),(1202,'Pueblo Irigoyen',19),(1203,'Pueblo Italiano',6),(1204,'Pueblo Libertador',7),(1205,'Pueblo Marini',19),(1206,'Pueblo Muñoz',19),(1207,'Puelches',10),(1208,'Puelén',10),(1209,'Puerta de Corral Quemado',2),(1210,'Puerta de San José',2),(1211,'Puerto Bermejo',4),(1212,'Puerto Esperanza',13),(1213,'Puerto Eva Perón',4),(1214,'Puerto Madryn',5),(1215,'Puerto Piray',13),(1216,'Puerto Rico',13),(1217,'Puerto Tirol',4),(1218,'Puerto Vilelas',4),(1219,'Puesto del Marqués',9),(1220,'Puesto Viejo',9),(1221,'Pujato',19),(1222,'Pumahuasi',9),(1223,'Punta del Agua',6),(1224,'Punta Indio',1),(1225,'Purmamarca',9),(1226,'Quebracho Herrado',6),(1227,'Quehué',10),(1228,'Quemú Quemú',10),(1229,'Quetrequén',10),(1230,'Quili Malal',14),(1231,'Quilino',6),(1232,'Quilmes',1),(1233,'Quilmes y los Sueldos',22),(1234,'Quines',18),(1235,'Quitilipi',4),(1236,'Rada Tilly',5),(1237,'Rafael García',6),(1238,'Rafaela',19),(1239,'Ramada Paso',7),(1240,'Ramallo',1),(1241,'Ramayón',19),(1242,'Ramón Castro',14),(1243,'Ramona',19),(1244,'Ranchillos y San Miguel',22),(1245,'Rancul',10),(1246,'Ranqueles',6),(1247,'Ranqueles',18),(1248,'Rauch',1),(1249,'Rawson',5),(1250,'Rawson',17),(1251,'Rayo Cortado',6),(1252,'Realicó',10),(1253,'Reconquista',19),(1254,'Recreo',2),(1255,'Recreo',19),(1256,'Reducción',6),(1257,'Relmo',10),(1258,'Renca',18),(1259,'Resistencia',4),(1260,'Riacho He-He',8),(1261,'Riachuelo',7),(1262,'Ricardone',19),(1263,'Rincón',6),(1264,'Rincón de los Sauces',14),(1265,'Rincon de Treneta',15),(1266,'Rinconada',9),(1267,'Río Bamba',6),(1268,'Río Ceballos',6),(1269,'Rio Chico',15),(1270,'Rio Chico y Nueva Trinidad',22),(1271,'Rio Colorado',22),(1272,'Rìo Colorado',15),(1273,'Río Cuarto',6),(1274,'Río de los Sauces',6),(1275,'Río Grande',0),(1276,'Río Mayo',5),(1277,'Río Pico',5),(1278,'Río Piedras',16),(1279,'Río Primero',6),(1280,'Rio Seco',22),(1281,'Río Segundo',6),(1282,'Río Tercero',6),(1283,'Rivadavia',1),(1284,'Rivadavia',12),(1285,'Rivadavia',17),(1286,'Rivadavia Banda Norte',16),(1287,'Rivadavia Banda Sur',16),(1288,'Rodeíto',9),(1289,'Rojas',1),(1290,'Roldán',19),(1291,'Rolón',10),(1292,'Romang',19),(1293,'Roque Pérez',1),(1294,'Rosales',6),(1295,'Rosario de la Frontera',16),(1296,'Rosario de Lerma',16),(1297,'Rosario de Río Grande',9),(1298,'Rosario Vera Peñaloza',11),(1299,'Rucanelo',10),(1300,'Rueda',19),(1301,'Rufino',19),(1302,'Ruiz de Montoya',13),(1303,'Sa Pereyra',19),(1304,'Saavedra',1),(1305,'Sacanta',6),(1306,'Saguier',19),(1307,'Saira',6),(1308,'Saladas',7),(1309,'Saladero Mariano Cabal',19),(1310,'Saladillo',1),(1311,'Saladillo',6),(1312,'Saladillo',18),(1313,'Saldán',6),(1314,'Salliqueló',1),(1315,'Salsacate',6),(1316,'Salsipuedes',6),(1317,'Salta',16),(1318,'Salto',1),(1319,'Salto Grande',19),(1320,'Sampacho',6),(1321,'Samuhú',4),(1322,'San Agustín',6),(1323,'San Agustín',19),(1324,'San Andres',22),(1325,'San Andrés de Giles',1),(1326,'San Antonio',7),(1327,'San Antonio',9),(1328,'San Antonio',13),(1329,'San Antonio',19),(1330,'San Antonio de Areco',1),(1331,'San Antonio de Arredondo',6),(1332,'San Antonio de Litín',6),(1333,'San Antonio de los Cobres',16),(1334,'San Antonio de Obligado',19),(1335,'San Antonio Oeste',15),(1336,'San Basilio',6),(1337,'San Bernardo',4),(1338,'San Bernardo',19),(1339,'San Blas de los Sauces',11),(1340,'San Carlos',7),(1341,'San Carlos',12),(1342,'San Carlos',16),(1343,'San Carlos Centro',19),(1344,'San Carlos de Bariloche',15),(1345,'San Carlos Minas',6),(1346,'San Carlos Norte',19),(1347,'San Carlos Sud',19),(1348,'San Cayetano',1),(1349,'San Clemente',6),(1350,'San Cosme',7),(1351,'San Cristóbal',19),(1352,'San Eduardo',19),(1353,'San Esteban',6),(1354,'San Eugenio',19),(1355,'San Fabián',19),(1356,'San Fernando',1),(1357,'San Fernando del Valle de Catamarca',2),(1358,'San Francisco',6),(1359,'San Francisco',9),(1360,'San Francisco',18),(1361,'San Francisco de Santa Fe',19),(1362,'San Francisco del Chañar',6),(1363,'San Genaro',19),(1364,'San Gerónimo',6),(1365,'San Gregorio',19),(1366,'San Guillermo',19),(1367,'San Hilario',8),(1368,'San Ignacio',6),(1369,'San Ignacio',13),(1370,'San Isidro',1),(1371,'San Javier',13),(1372,'San Javier',15),(1373,'San Javier',19),(1374,'San Javier y Yacanto',6),(1375,'San Jeronimo',18),(1376,'San Jerónimo del Sauce',19),(1377,'San Jerónimo Norte',19),(1378,'San Jerónimo Sud',19),(1379,'San Joaquín',6),(1380,'San Jorge',19),(1381,'San José',2),(1382,'San José',6),(1383,'San José',13),(1384,'San Jose de la Cocha',22),(1385,'San José de la Dormida',6),(1386,'San José de la Esquina',19),(1387,'San José de las Salinas',6),(1388,'San Jose del Morro',18),(1389,'San José del Rincón',19),(1390,'San Juan',17),(1391,'San Justo',19),(1392,'San Lorenzo',6),(1393,'San Lorenzo',7),(1394,'San Lorenzo',16),(1395,'San Lorenzo',19),(1396,'San Luis',18),(1397,'San Luis del Palmar',7),(1398,'San Marcos Sierras',6),(1399,'San Marcos Sud',6),(1400,'San Mariano',19),(1401,'San Mart',19),(1402,'San Martin',18),(1403,'San Martín',12),(1404,'San Martín',13),(1405,'San Martín',17),(1406,'San Martín de los Andes',14),(1407,'San Martín Dos',8),(1408,'San Miguel',1),(1409,'San Miguel',7),(1410,'San Nicolás',1),(1411,'San Pablo',18),(1412,'San Pablo y Villa Nougues',22),(1413,'San Patricio del Chañar',14),(1414,'San Pedro',1),(1415,'San Pedro',6),(1416,'San Pedro',13),(1417,'San Pedro de Colalao',22),(1418,'San Pedro de Jujuy',9),(1419,'San Pedro Norte',6),(1420,'San Rafael',12),(1421,'San Ramón de la Nueva Orán',16),(1422,'San Roque',6),(1423,'San Roque',7),(1424,'San Salvador de Jujuy',9),(1425,'San Vicente',1),(1426,'San Vicente',6),(1427,'San Vicente',13),(1428,'San Vicente',19),(1429,'Sanagasta',11),(1430,'Sancti Spiritu',19),(1431,'Sanford',19),(1432,'Santa Ana',7),(1433,'Santa Ana',9),(1434,'Santa Ana',13),(1435,'Santa Ana',22),(1436,'Santa Catalina',6),(1437,'Santa Catalina',9),(1438,'Santa Clara',9),(1439,'Santa Clara de Buena Vista',19),(1440,'Santa Clara de Saguier',19),(1441,'Santa Cruz y la Tuna',22),(1442,'Santa Elena',6),(1443,'Santa Eufemia',6),(1444,'Santa Fe',19),(1445,'Santa Isabel',10),(1446,'Santa Isabel',19),(1447,'Santa Lucia',22),(1448,'Santa Lucía',7),(1449,'Santa Lucía',17),(1450,'Santa Margarita',19),(1451,'Santa María',2),(1452,'Santa María',13),(1453,'Santa María de Punilla',6),(1454,'Santa Rosa',2),(1455,'Santa Rosa',10),(1456,'Santa Rosa',12),(1457,'Santa Rosa',20),(1458,'Santa Rosa de Calamuchita',6),(1459,'Santa Rosa de Calchines',19),(1460,'Santa Rosa de Leales y L. Blanca',22),(1461,'Santa Rosa de Río Primero',6),(1462,'Santa Sylvina',4),(1463,'Santa Teresa',10),(1464,'Santa Teresa',19),(1465,'Santa Victoria Este',16),(1466,'Santa Victoria Oeste',16),(1467,'Santiago de Liniers',13),(1468,'Santiago Temple',6),(1469,'Santo Domingo',19),(1470,'Santo Pipo',13),(1471,'Santo Tomás',14),(1472,'Santo Tomé',7),(1473,'Santo Tomé',19),(1474,'Santurce',19),(1475,'Sarah',10),(1476,'Sargento Cabral',19),(1477,'Sargento Moya',22),(1478,'Sarmiento',5),(1479,'Sarmiento',6),(1480,'Sarmiento',17),(1481,'Sarmiento',19),(1482,'Sastre',19),(1483,'Saturnino María Laspiur',6),(1484,'Sauce',7),(1485,'Sauce Arriba',6),(1486,'Sauce Viejo',19),(1487,'Saujil',2),(1488,'Sebastián Elcano',6),(1489,'Seclantás',16),(1490,'Seeber',6),(1491,'Segunda Usina',6),(1492,'Senillosa',14),(1493,'Serodino',19),(1494,'Serrano',6),(1495,'Serrezuela',6),(1496,'Sierra Colorada',15),(1497,'Sierra Grande',15),(1498,'Sierra Paileman',15),(1499,'Siete Palmas',8),(1500,'Silva',19),(1501,'Silvio Pellico',6),(1502,'Simbolar',6),(1503,'Sinsacate',6),(1504,'Soldado Maldonado',22),(1505,'Soldini',19),(1506,'Soledad',19),(1507,'Speluzzi',10),(1508,'Sta Rosa del Conlara',18),(1509,'Suardi',19),(1510,'Subteniente Perín',8),(1511,'Suco',6),(1512,'Suipacha',1),(1513,'Sunchales',19),(1514,'Susana',19),(1515,'Susques',9),(1516,'Susques',16),(1517,'Tabay',7),(1518,'Taco Pozo',4),(1519,'Taco Ralo',22),(1520,'Tacuarendí',19),(1521,'Tacural',19),(1522,'Tala Cañada',6),(1523,'Tala Huasi',6),(1524,'Talaini',6),(1525,'Talita',18),(1526,'Tancacha',6),(1527,'Tandil',1),(1528,'Tanti',6),(1529,'Tapalqué',1),(1530,'Tapebicuá',7),(1531,'Tapso',2),(1532,'Tartagal',16),(1533,'Tartagal',19),(1534,'Tatacuá',7),(1535,'Tecka',5),(1536,'Telén',10),(1537,'Teniente Berdina',22),(1538,'Teodelina',19),(1539,'Theobald',19),(1540,'Ticino',6),(1541,'Tigre',1),(1542,'Tilcara',9),(1543,'Tilisarao',18),(1544,'Timbúes',19),(1545,'Tinoco',6),(1546,'Tinogasta',2),(1547,'Tío Pujio',6),(1548,'Toay',10),(1549,'Toba',19),(1550,'Tolar Grande',16),(1551,'Toledo',6),(1552,'Tomás Manuel Anchorena',10),(1553,'Tordillo',1),(1554,'Tornquist',1),(1555,'Toro Pujio',6),(1556,'Tortugas',19),(1557,'Tosno',6),(1558,'Tosquita',6),(1559,'Tostado',19),(1560,'Totoras',19),(1561,'Traill',19),(1562,'Tránsito',6),(1563,'Trelew',5),(1564,'Trenel',10),(1565,'Trenque Lauquen',1),(1566,'Tres Arroyos',1),(1567,'Tres Capones',13),(1568,'Tres Cruces',9),(1569,'Tres de Febrero',1),(1570,'Tres Isletas',4),(1571,'Tres Lagunas',8),(1572,'Tres Lomas',1),(1573,'Trevelín',5),(1574,'Tricao Malal',14),(1575,'Trinidad',22),(1576,'Tuclame',6),(1577,'Tumbaya',9),(1578,'Tunuyán',12),(1579,'Tupungato',12),(1580,'Ucacha',6),(1581,'Ullum',17),(1582,'Unanue',10),(1583,'Union',18),(1584,'Unquillo',6),(1585,'Uranga',19),(1586,'Uriburu',10),(1587,'Urundel',16),(1588,'Ushuaia',0),(1589,'V, de la Quebrada',18),(1590,'V, de Praga',18),(1591,'V, Gral, Roca',18),(1592,'Valcheta',15),(1593,'Valle Azul',15),(1594,'Valle de Anisacate',6),(1595,'Valle Fértil',17),(1596,'Valle Grande',9),(1597,'Valle Hermoso',6),(1598,'Valle Viejo',2),(1599,'Vaqueros',16),(1600,'Varvarco - Invernada Vieja',14),(1601,'Veinticinco de Mayo',10),(1602,'Venado Tuerto',19),(1603,'Vera',19),(1604,'Vera y Pintado',19),(1605,'Vértiz',10),(1606,'Viamonte',6),(1607,'Vicente López',1),(1608,'Victorica',10),(1609,'Vicuña Mackenna',6),(1610,'Videla',19),(1611,'Viedma',15),(1612,'Vila',19),(1613,'Villa Allende',6),(1614,'Villa Amancay',6),(1615,'Villa Amelia',19),(1616,'Villa Ana',19),(1617,'Villa Ángela',4),(1618,'Villa Ascasubi',6),(1619,'Villa Berthet',4),(1620,'Villa Candelaria Norte',6),(1621,'Villa Cañás',19),(1622,'Villa Carlos Paz',6),(1623,'Villa Cerro Azul',6),(1624,'Villa Ciudad de América',6),(1625,'Villa Ciudad Parque los Reartes',6),(1626,'Villa Concepción del Tío',6),(1627,'Villa Constitución',19),(1628,'Villa Cura Brochero',6),(1629,'Villa Curi Leuvú',14),(1630,'Villa de Chicligasta',22),(1631,'Villa de las Rosas',6),(1632,'Villa de Leales',22),(1633,'Villa de María',6),(1634,'Villa de Pocho',6),(1635,'Villa de Soto',6),(1636,'Villa del Carmen',18),(1637,'Villa del Dique',6),(1638,'Villa del Nahueve',14),(1639,'Villa del Prado',6),(1640,'Villa del Rosario',6),(1641,'Villa del Totoral',6),(1642,'Villa Dolores',6),(1643,'Villa Dos Trece',8),(1644,'Villa el Chacay',6),(1645,'Villa el Chocón',14),(1646,'Villa Eloísa',19),(1647,'Villa Escolar',8),(1648,'Villa Fontana',6),(1649,'Villa General Belgrano',6),(1650,'Villa Gesell',1),(1651,'Villa Giardino',6),(1652,'Villa Gobernador Gálvez',19),(1653,'Villa Guillermina',19),(1654,'Villa Huidobro',6),(1655,'Villa la Angostura',14),(1656,'Villa la Bolsa',6),(1657,'Villa Larca',18),(1658,'Villa Llanquin',15),(1659,'Villa los Aromos',6),(1660,'Villa los Patos',6),(1661,'Villa María',6),(1662,'Villa Mercedes',18),(1663,'Villa Minetti',19),(1664,'Villa Mirasol',10),(1665,'Villa Mugueta',19),(1666,'Villa Nueva',6),(1667,'Villa Olivari',7),(1668,'Villa Padre Monti',22),(1669,'Villa Parque Santa Ana',6),(1670,'Villa Parque Siquiman',6),(1671,'Villa Pehuenia',14),(1672,'Villa Quillinzo',6),(1673,'Villa Quinteros',22),(1674,'Villa Regina',15),(1675,'Villa Río Bermejito',4),(1676,'Villa Río Icho Cruz',6),(1677,'Villa Rossi',6),(1678,'Villa Rumipal',6),(1679,'Villa San Esteban',6),(1680,'Villa San Isidro',6),(1681,'Villa San José',19),(1682,'Villa Santa Cruz del Lago',6),(1683,'Villa Saralegui',19),(1684,'Villa Sarmiento (G.R.)',6),(1685,'Villa Sarmiento (S. A.)',6),(1686,'Villa Traful',14),(1687,'Villa Trinidad',19),(1688,'Villa Tulumba',6),(1689,'Villa Valeria',6),(1690,'Villa Vil',2),(1691,'Villa Yacanto',6),(1692,'Villada',19),(1693,'Villarino',1),(1694,'Vinalito',9),(1695,'Vinchina',11),(1696,'Virginia',19),(1697,'Vista Alegre',14),(1698,'Volcán',9),(1699,'Washington',6),(1700,'Wenceslao Escalante',6),(1701,'Wheelwright',19),(1702,'Winifreda',10),(1703,'Yala',9),(1704,'Yapeyú',7),(1705,'Yataytí Calle',7),(1706,'Yavi',9),(1707,'Yuto',9),(1708,'Zanjitas',18),(1709,'Zapala',14),(1710,'Zárate',1),(1711,'Zavalla',19),(1712,'Zenón Pereyra',19),(1713,'Zonda',17);
/*!40000 ALTER TABLE `localidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `marca` char(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_proveedor` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'3m',1),(2,'Acrylatex',9),(3,'Adiabatic',5),(4,'Agorex',24),(5,'Alabastine',3),(6,'Alba',3),(7,'Andina',39),(8,'Atennea',37),(9,'Atlas',6),(10,'Automotive',48),(11,'Bauker',27),(12,'Black&Decker',8),(13,'Brikol',3),(14,'Brillospray',52),(15,'Brio',39),(16,'Campbell',38),(17,'Camuflage',48),(18,'Casablanca',52),(19,'Casaseca',52),(20,'Celta',18),(21,'Cetol',3),(22,'Chalked',48),(23,'Chrometal',16),(24,'Colorin',54),(25,'Comfort Grip',48),(26,'Converlux',38),(27,'Corroless',38),(28,'Cromatica',16),(29,'Dacqua',2),(30,'Danzke',38),(31,'Dixilina',12),(32,'Dkp',38),(33,'Doble A',13),(34,'Duracril',14),(35,'Dynasty',29),(36,'El Galgo',15),(37,'El Pulpito',2),(38,'Elefante',15),(39,'Emacril',16),(40,'Emapi',16),(41,'Evans',39),(42,'Fana Quimica',20),(43,'Fanacola',20),(44,'Fastix',2),(45,'Ferrobet',38),(46,'Filt Pint',31),(47,'Fischer',21),(48,'Ful Stick',22),(49,'Gamma',23),(50,'Harris',36),(51,'Henkel',24),(52,'Hunter',31),(53,'Hydra',54),(54,'Inca',40),(55,'Indalo',31),(56,'Karson',15),(57,'Kolor',54),(58,'La Gotita',2),(59,'Labor',45),(60,'Lajamax',25),(61,'Leon',36),(62,'Maderin',14),(63,'Magister',16),(64,'Merclin',34),(65,'Midway',54),(66,'Montana',52),(67,'Montana Water Base',52),(68,'Nodulo',53),(69,'Orgill',35),(70,'Painters',36),(71,'Pegamil',4),(72,'Penta',38),(73,'Performa Interior',41),(74,'Perma White',48),(75,'Petrilac',38),(76,'Plavicon',41),(77,'Polacrin',14),(78,'Polilak',38),(79,'Poxilina',2),(80,'Poximix',2),(81,'Poxipol',2),(82,'Poxiran',2),(83,'Poxitas',2),(84,'Preference',29),(85,'Premier',44),(86,'Pro Madera',16),(87,'Rapiparche',41),(88,'Recumix',52),(89,'Recuplast',52),(90,'Redline',7),(91,'Rosarpin',47),(92,'Rust Oleum',48),(93,'S/M',1),(94,'Sellagres',38),(95,'Sello De Oro',54),(96,'Sherwin',50),(97,'Sika',51),(98,'Sikalastic',51),(99,'Siloc',4),(100,'Silver Shadow',10),(101,'Sinteplast',52),(102,'Solvex',54),(103,'Specialty',48),(104,'Stops-Rust',48),(105,'Suprabond',17),(106,'Talento',52),(107,'Tersuave',54),(108,'Tesa',55),(109,'Tigre',46),(110,'Topex',16),(111,'Uhu',11),(112,'Ultra Cover 2x',48),(113,'Ultramaster',52),(114,'Unipox',2),(115,'Varathane',48),(116,'Venier',53),(117,'Voligoma',2),(118,'Weber',49),(119,'Zinsser',48);
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sku` int(11) unsigned NOT NULL,
  `id_marca` int(10) unsigned NOT NULL,
  `id_proveedor` int(11) unsigned NOT NULL,
  `id_subtipo` int(10) unsigned NOT NULL,
  `id_tipo` int(10) unsigned NOT NULL,
  `id_subfamilia` int(10) unsigned NOT NULL,
  `id_familia` int(11) unsigned NOT NULL,
  `presentacion` text NOT NULL,
  `contenido_neto` text NOT NULL,
  `color` text NOT NULL,
  `tiempo_entre_manos` text NOT NULL,
  `base` text NOT NULL,
  `id_terminacion` int(10) unsigned NOT NULL,
  `rendimiento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `uso_recomendado` text NOT NULL,
  `tiempo_de_secado` text NOT NULL,
  `garantia` text NOT NULL,
  `imagen_producto` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,2223,0,0,0,0,0,0,'ASDFASDF','','','','',0,'','','','8','',NULL,NULL,'2021-03-16 22:39:00'),(2,2222,1,0,0,0,0,0,'1L','','azul','','al agua',0,'12 mts','','','5','',NULL,NULL,'2021-03-16 22:40:30'),(3,4444,0,0,0,0,0,0,'','','','','',0,'','','','','',NULL,NULL,NULL),(4,1111,0,0,0,0,0,0,'1L','','blanco','','al agua',0,'12 mts','','','5','',NULL,NULL,NULL),(5,55555,0,0,0,0,0,0,'','','','','',0,'','','','','La nueva1613610796630.jpg',NULL,NULL,NULL),(6,55555,0,0,0,0,0,0,'','','','','',0,'','','','','La nueva1613611739899.jpg',NULL,NULL,NULL),(7,55555,0,0,0,0,0,0,'','','','','',0,'','','','','La nueva1613611747415.jpg',NULL,NULL,NULL),(8,0,0,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(9,0,0,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(10,0,0,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(11,0,0,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(12,4488,0,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(13,0,0,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(14,88888,1,0,0,0,0,0,'','','','','',0,'','','','','NaN.jpg',NULL,NULL,NULL),(15,1414,1,1,1,0,1,1,'1L','','blanco','','al agua',0,'12 mts','','al tacto','5 años','NaN.jpg',NULL,NULL,NULL),(16,1415,1,1,1,1,1,1,'1L','','blanco','','al agua',0,'12 mts','','al tacto','5 años','NaN.jpg',NULL,NULL,NULL),(17,1416,1,1,1,1,1,1,'','','','','',0,'','','','','11614131239163.jpg',NULL,NULL,NULL),(18,23234,0,8,1,1,1,2,'4','213432','3242','1','234',1,'324','2342','324','324','01615160064227.png',NULL,NULL,NULL),(19,1234123,3,16,1,1,1,1,'123','2314','3214','3214','2314',0,'213421','3214','3214','234','31615160479342.png',NULL,NULL,NULL),(20,2334532,1,20,1,1,1,1,'3425','4325','432543','4325','4325',0,'34254','3245','3253','5432','11615161002475.png',NULL,NULL,NULL),(21,43214,1,20,1,1,1,1,'3214','3214','3214','2314','214',321,'4321','34214','43214','321','11615161568299.png',NULL,NULL,NULL),(22,43214,1,20,1,1,1,1,'3214','3214','3214','2314','214',321,'4321','34214','43214','321','11615161659339.png',NULL,NULL,NULL),(23,23432,1,20,1,1,1,1,'23424','2342','4324','32432','324',324,'432','234','324','342','11615161694807.png',NULL,NULL,NULL),(24,3333333,45,18,1,1,1,1,'21312','3213','2131','3213','2131',1,'1231','213','3213','2313','451616015390658.jpg',NULL,'2021-03-17 21:09:50',NULL),(25,3243214,1,1,1,1,1,1,'','2134','dsac32','2','3214',3,'2314','321','321','3241','11615739347261.png',NULL,NULL,NULL),(26,3543556,2,9,20,4,3,2,'435','435','345','4','534',3,'435','345','435','453','21616016391168.jpg','2021-03-17 21:26:31','2021-03-17 21:26:31',NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `proveedor` char(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'3m Argentina S.A.'),(2,'Akapol'),(3,'Alba'),(4,'Anaerobicos S.R.Lan'),(5,'Argenspray'),(6,'Atlas S.A.'),(7,'Big Bear International Co.,Ltd.'),(8,'Black & Decker'),(9,'Colorin'),(10,'Dealer Group Srl'),(11,'Distribuidora Aifa'),(12,'Dixilina'),(13,'Doble A'),(14,'Duracril Group S.A.'),(15,'El Galgo'),(16,'Emapi S.A.'),(17,'Erpa S.A.'),(18,'Establecimientos Metalurgicos Deza Srl'),(20,'Fana Quimica'),(21,'Fischer Argentina S.A.'),(22,'Ful Stik'),(23,'Grupo Simpa Sa'),(24,'Henkel Argentina'),(25,'Hidroquimica Americana Sa'),(27,'Jinhua Jinshun Tools Co., Ltd'),(29,'Laboratorio Arise Srl'),(31,'Lijas Argentinas Srl'),(34,'Merclin S.A.'),(35,'Orgill Inc'),(36,'Painters Solutions Srl'),(37,'Perfiles Revestidos S.R.L. Atennea'),(38,'Petrilac'),(39,'Pinturas Andina'),(40,'Pinturas Inca'),(41,'Plavicon'),(44,'Premier Paint Roller Company Llc'),(45,'Protec Asociados S.R.L.'),(46,'Ramasil S.A'),(47,'Rosarpin'),(48,'Rust Oleum Argentina S.A'),(49,'Saint Gobain Productos Para La Construcc'),(50,'Sherwin Williams'),(51,'Sika Argentina S.A.'),(52,'Sinteplast S.A.'),(53,'Sumex'),(54,'Tersuave'),(55,'Tesa');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provincias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `provincia` text CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
INSERT INTO `provincias` VALUES (1,'Buenos Aires'),(2,'Catamarca'),(3,'Ciudad Autónoma de Buenos Aires'),(4,'Chaco'),(5,'Chubut'),(6,'Córdoba'),(7,'Corrientes'),(8,'Formosa'),(9,'Jujuy'),(10,'La Pampa'),(11,'La Rioja'),(12,'Mendoza'),(13,'Misiones'),(14,'Neuquén'),(15,'Río Negro'),(16,'Salta'),(17,'San Juan'),(18,'San Luis'),(19,'Santa Fe'),(20,'Santiago del Estero'),(21,'Tierra del Fuego'),(22,'Tucumán');
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) NOT NULL,
  `stock` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subfamilia`
--

DROP TABLE IF EXISTS `subfamilia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subfamilia` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `subfamilia` char(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_familia` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subfamilia`
--

LOCK TABLES `subfamilia` WRITE;
/*!40000 ALTER TABLE `subfamilia` DISABLE KEYS */;
INSERT INTO `subfamilia` VALUES (1,'EXTERIOR',2),(2,'HERRAMIENTAS Y ACCESORIOS',1),(3,'INTERIOR',2),(4,'OTROS',2);
/*!40000 ALTER TABLE `subfamilia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtipo`
--

DROP TABLE IF EXISTS `subtipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subtipo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `subtipo` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_tipo` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtipo`
--

LOCK TABLES `subtipo` WRITE;
/*!40000 ALTER TABLE `subtipo` DISABLE KEYS */;
INSERT INTO `subtipo` VALUES (1,'Adhesivo Contacto/ Neopreno Profesional',1),(2,'Adhesivo Contacto/ Neopreno Uso General',1),(3,'Adhesivo De Montaje Hogar',2),(4,'Adhesivo De Montaje Profesional',2),(5,'Adhesivo Instantaneo Normal/Liquido',3),(6,'Adhesivos Epoxicos',18),(7,'Adhesivos Hotmelt',18),(8,'Adhesivos Instantaneo Gel',3),(9,'Aguarras Y Diluyentes Aguarras',9),(10,'Anticorrosivos',22),(11,'Automotriz',5),(12,'Bandejas',17),(13,'Barniz Marino Exterior',6),(14,'Barniz Poliuretano Interior',6),(15,'Bloqueadores De Humedad',13),(16,'Brochas Cerda Natural',7),(17,'Brochas Cerda Sintetica',7),(18,'Cintas Uso General',8),(19,'Cintas Uso Profesional',8),(20,'Colas Frias Profesional',4),(21,'Concentrados/Entonadores',22),(22,'Covertores/Lonas Proteccion Pintura',17),(23,'Demarcacion De Pisos',22),(24,'Diluyentes Especiales',9),(25,'Equipo Airless',10),(26,'Equipo Hvlp/Portatil',10),(27,'Esmalte',5),(28,'Esmalte Sintetico Brillante',21),(29,'Esmalte Sintetico Mate',21),(30,'Esmalte Sintetico Satinado',21),(31,'Espatulas/Llanas',17),(32,'Especialidades',5),(33,'Extensores',24),(34,'Fijador-Sellador Al Agua',23),(35,'Fijador-Sellador Al Aguarras',23),(36,'Impermeabilizantes Especiales',13),(37,'Impregnante Para Madera Exterior',6),(38,'Impregnante Para Madera Interior',6),(39,'Imprimantes Basicos',6),(40,'Industriales/Epoxicos/Pu',22),(41,'Laca Nitro',14),(42,'Lasures Interior',6),(43,'Latex/Vinilos Especialidades',19),(44,'Latex/Vinilos Exterior Estandar',19),(45,'Latex/Vinilos Exterior Premium',19),(46,'Latex/Vinilos Interior Basico',19),(47,'Latex/Vinilos Interior Deluxe',19),(48,'Latex/Vinilos Interior Elite',19),(49,'Latex/Vinilos Interior Estandar',19),(50,'Latex/Vinilos Interior Premium',19),(51,'Latex/Vinilos Para Cielos',19),(52,'Lija Al Agua',15),(53,'Lija Madera/Multiuso',15),(54,'Lija Metal',15),(55,'Limpiadores De Madera',14),(56,'Mangos/Garfos',24),(57,'Masillas',23),(58,'Masillas/Pasta De Retape',14),(59,'Microcemento',22),(60,'Neutra Pvc Espejos Y Policarbonato',26),(61,'Otras Lijas',15),(62,'Otros',14),(63,'Otros Accesorios',17),(64,'Otros Accesorios Artes Y Hobbies',16),(65,'Otros Adhesivos',18),(66,'Pasta Muro/Enduido/Estuco/Massa Exterior',23),(67,'Pasta Muro/Enduido/Estuco/Massa Interior',23),(68,'Pintura Artes Y Hobbies',16),(69,'Pinturas Impermeabilizantes Muro',13),(70,'Pinturas Impermeabilizantes Techo',13),(71,'Piscinas',22),(72,'Pistolas',10),(73,'Pistolas De Calafateo',12),(74,'Pistolas De Hotmelt',12),(75,'Preservantes E Insecticidas',6),(76,'Removedores De Pintura Al Agua (Gel)',9),(77,'Removedores De Pintura Al Solvente',9),(78,'Rodillos Lana Natural',24),(79,'Rodillos Lana Sintetica',24),(80,'Rodillos Poliester',24),(81,'Rodillos Poliuretano',24),(82,'Rodillos Texturados',24),(83,'Selladores Acrilicos',25),(84,'Selladores E Hidrorrepelentes',13),(85,'Selladores Poliuretano',25),(86,'Set De Brochas',7),(87,'Sets/Kits De Pinturas',17),(88,'Silicona Multiusos Vidrio Y Aluminio',26),(89,'Siliconas Bano Y Cocina',26),(90,'Tapagoteras Acrilicos',27),(91,'Texturas Y Estucos',11),(92,'Thinner',9),(93,'Tintes',14),(94,'Tintometria Esmaltes Sinteticos',21),(95,'Tintometria Impermeabilizante',13),(96,'Tintometria Latex/Vinilos Exterior Premium',20),(97,'Tintometria Latex/Vinilos Interior Deluxe',20),(98,'Tintometria Latex/Vinilos Interior Elite',20),(99,'Tintometria Latex/Vinilos Interior Estandar',20),(100,'Tintometria Latex/Vinilos Interior Premium',20),(101,'Vendas-Mantas Elasticas',13),(102,'Vitrificantes Exterior',6),(103,'Vitrificantes Interior',6);
/*!40000 ALTER TABLE `subtipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terminacion`
--

DROP TABLE IF EXISTS `terminacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terminacion` (
  `id` int(11) NOT NULL,
  `terminacion` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terminacion`
--

LOCK TABLES `terminacion` WRITE;
/*!40000 ALTER TABLE `terminacion` DISABLE KEYS */;
INSERT INTO `terminacion` VALUES (1,'Mate'),(2,'Satinado'),(3,'Brillante'),(4,'Texturado');
/*!40000 ALTER TABLE `terminacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_subfamilia` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Adhesivo Contacto/Neopreno',2),(2,'Adhesivo De Montaje',2),(3,'Adhesivo Instantaneo/ Cianocrito',2),(4,'Adhesivos Colas Frias/ Pva',2),(5,'Aerosoles/ Spray',4),(6,'Barnices, Impregnantes, Stain',1),(7,'Brochas',2),(8,'Cintas Para Enmascarar',2),(9,'Diluyentes Y Solventes',4),(10,'Equipo De Pinturas/Pistolas Y Complementos',2),(11,'Exturas Y/O Estucos Decorativos',4),(12,'Herramientas Aplicacion',2),(13,'Impermeabilizantes',4),(14,'Lacas, Selladores, Tintas Para Muebles',3),(15,'Lijas',2),(16,'Manualidades/Artes Y Hobbie',2),(17,'Otros Accesorios De Pinturas',2),(18,'Otros Adhesivos',2),(19,'Pinturas Decorativas Base Agua - Ready Mix',1),(20,'Pinturas Decorativas Base Agua - Tintometria',3),(21,'Pinturas Decorativas Base Solvente (Oleos/ Es',4),(22,'Pinturas Especiales/ Industriales De Protecci',4),(23,'Preparacion Superficie',4),(24,'Rodillos',2),(25,'Selladores Y Poliuretanos',2),(26,'Siliconas',2),(27,'Tapagoteras',2);
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pintame'
--

--
-- Dumping routines for database 'pintame'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-17 19:00:50
