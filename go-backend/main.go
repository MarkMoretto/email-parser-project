package main

import (
	_"fmt"
	t "moretto/goapi/tarfile"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

const TarFilePath string = "data\\sampleEmails.tar.gz"

var messages t.EmailMessages

func init() {
	messages = t.GetTarfileData(TarFilePath)
}

// Handlers
func getMessages(ec echo.Context) error {
	return ec.JSON(http.StatusOK, messages.Messages)
}

func main() {
	// TarFilePath := "data\\sampleEmails.tar.gz"
	// ttar.GetTarInfo(TarFilePath)
	// for k, v := range messages.Messages {
	// 	fmt.Println()
	// }

	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "server is running...")
	})

	// e.GET("/api", getMessages)

	e.Logger.Fatal(e.Start(":9876"))
}
