CREATE DATABASE  IF NOT EXISTS `mbamobile` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `mbamobile`;

-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: mbamobile
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `application` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  `BUNDLE_ID` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `BUNDLE_ID_UNIQUE` (`BUNDLE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES (1,'name1 editado','bundle1 editado'),(2,'name 2','bundle 2'),(3,'name 3','bundle 3'),(4,'Novo App','Novo Bundle');
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `person` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CPF` varchar(11) NOT NULL,
  `NAME` varchar(150) DEFAULT NULL,
  `BIRTHDAY` date DEFAULT NULL,
  `RG` varchar(13) DEFAULT NULL,
  `PROFILE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`),
  KEY `ROLE_idx` (`PROFILE`),
  CONSTRAINT `FK_PERSON_ROLE` FOREIGN KEY (`PROFILE`) REFERENCES `profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'01804422609','Marianna Tannús Spirandelli','1970-01-01','15833000',3),(2,'92309844576','Emmanuel Bernardes Lima',NULL,'12678557',1),(3,'17846355376','Ricardo Santos Soares',NULL,NULL,1),(4,'62519833887','Daniel Antonio Coelho','2018-12-05','12786655',2),(9,'98754923746','Carla Cristina','1987-12-03','67354222',1),(10,'98712366409','Victor Augusto','2018-12-05','12897333',1);
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons_applications`
--

DROP TABLE IF EXISTS `persons_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `persons_applications` (
  `PERSON` int(11) NOT NULL,
  `APPLICATION` int(11) NOT NULL,
  PRIMARY KEY (`PERSON`,`APPLICATION`),
  KEY `FK_PA_APPLICATION_idx` (`APPLICATION`),
  CONSTRAINT `FK_PA_APPLICATION` FOREIGN KEY (`APPLICATION`) REFERENCES `application` (`id`),
  CONSTRAINT `FK_PA_PERSON` FOREIGN KEY (`PERSON`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons_applications`
--

LOCK TABLES `persons_applications` WRITE;
/*!40000 ALTER TABLE `persons_applications` DISABLE KEYS */;
INSERT INTO `persons_applications` VALUES (1,1),(3,1),(4,1),(10,1),(1,2),(2,2),(1,3),(10,3),(1,4);
/*!40000 ALTER TABLE `persons_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `profile` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'USER','COMMON USER WITH FEW FEATURES'),(2,'MANAGER','USER WITH MOST OF THE AVAILABLE FUTURES'),(3,'ADMIN','USER WITH ALL PERMISSIONS');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-07 23:28:32
