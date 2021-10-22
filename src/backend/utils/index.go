package utils

import (
	"fmt"
	"os"
)

// Handle display and exit of process on error.
func HandleErr(e error) {
	fmt.Println(e)
	os.Exit(1)
}
