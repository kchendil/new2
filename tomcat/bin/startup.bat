@echo off
rem Licensed to the Apache Software Foundation (ASF) under one or more
rem contributor license agreements.  See the NOTICE file distributed with
rem this work for additional information regarding copyright ownership.
rem The ASF licenses this file to You under the Apache License, Version 2.0
rem (the "License"); you may not use this file except in compliance with
rem the License.  You may obtain a copy of the License at
rem
rem     http://www.apache.org/licenses/LICENSE-2.0
rem
rem Unless required by applicable law or agreed to in writing, software
rem distributed under the License is distributed on an "AS IS" BASIS,
rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
rem See the License for the specific language governing permissions and
rem limitations under the License.

if "%OS%" == "Windows_NT" setlocal
rem ---------------------------------------------------------------------------
rem Start script for the CATALINA Server
rem
rem $Id: startup.bat 562770 2007-08-04 22:13:58Z markt $
rem ---------------------------------------------------------------------------

rem Guess CATALINA_HOME if not defined

set JAVA_OPTS="-Djava.awt.headless=true"
set JAVA_BIN="java.exe"


set CURRENT_DIR=%~dp0
if not "%CATALINA_HOME%" == "" goto gotHome
cd %CURRENT_DIR%\\..\\
set CATALINA_HOME=%CD%
cd %CURRENT_DIR%
:gotHome
if exist "%CATALINA_HOME%\bin\catalina.bat" goto okHome
echo The CATALINA_HOME environment variable is not defined correctly
echo This environment variable is needed to run this program
goto end
:okHome

set EXECUTABLE=%CATALINA_HOME%\bin\catalina.bat
set EXECUTABLEDB=%CATALINA_HOME%\bin\startDB.bat

rem Check that target executable exists
if exist "%EXECUTABLE%" goto okExec
echo Cannot find %EXECUTABLE%
echo This file is needed to run this program
goto end
:okExec

rem Get remaining unshifted command line arguments and save them in the
set CMD_LINE_ARGS=
:setArgs
if ""%1""=="""" goto doneSetArgs
set CMD_LINE_ARGS=%CMD_LINE_ARGS% %1
shift
goto setArgs
:doneSetArgs

call "%EXECUTABLE%" start %CMD_LINE_ARGS%

rem Start the HSQL Database
"%JAVA_BIN%" -cp  "%CATALINA_HOME%\lib\hsqldb.jar" org.hsqldb.Server -database.0 file:"%CATALINA_HOME%"\db\mydb -dbname.0 idmrmap

:end
