package main

import (
	// "fmt"
	// "io/fs"
	// "log"
	// "os"
	// ttar "moretto/goapi/tarfile"
	// "path/filepath"
	"net/http"
	// s "moretto/goapi/server"
	t "moretto/goapi/tarfile"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"	
)

const TarFilePath string = "data\\sampleEmails.tar.gz"

var messages = t.InitTarInfo(TarFilePath)

// Handlers
func getMessages(ec echo.Context) error {
	return ec.JSON(http.StatusOK, messages)
}


func main() {
	// TarFilePath := "data\\sampleEmails.tar.gz"
	// ttar.GetTarInfo(TarFilePath)

	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "server is running...")
	})

	e.GET("/messages", getMessages)

	e.Logger.Fatal(e.Start(":9876"))
}
