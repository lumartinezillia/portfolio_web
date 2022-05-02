-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Nacionalidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Nacionalidad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `dni` VARCHAR(45) NOT NULL,
  `Nacionalidad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Persona_Nacionalidad1_idx` (`Nacionalidad_id` ASC) VISIBLE,
  CONSTRAINT `fk_Persona_Nacionalidad1`
    FOREIGN KEY (`Nacionalidad_id`)
    REFERENCES `mydb`.`Nacionalidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Estudio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Estudio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `título` VARCHAR(45) NOT NULL,
  `institución` VARCHAR(45) NULL,
  `fecha_ingreso` DATE NOT NULL,
  `fecha_egreso` DATE NULL,
  `promedio` INT NULL,
  `idPersona` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Estudio_Persona_idx` (`idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_Estudio_Persona`
    FOREIGN KEY (`idPersona`)
    REFERENCES `mydb`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Domicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Domicilio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NOT NULL,
  `número` INT NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`PersonaPorDomicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`PersonaPorDomicilio` (
  `idDomicilio` INT NOT NULL,
  `idPersona` INT NOT NULL,
  PRIMARY KEY (`idDomicilio`, `idPersona`),
  INDEX `fk_Domicilio_has_Persona_Persona1_idx` (`idPersona` ASC) VISIBLE,
  INDEX `fk_Domicilio_has_Persona_Domicilio1_idx` (`idDomicilio` ASC) VISIBLE,
  CONSTRAINT `fk_Domicilio_has_Persona_Domicilio1`
    FOREIGN KEY (`idDomicilio`)
    REFERENCES `mydb`.`Domicilio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Domicilio_has_Persona_Persona1`
    FOREIGN KEY (`idPersona`)
    REFERENCES `mydb`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
