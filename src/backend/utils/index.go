package utils

import (
	"fmt"
	"os"
	"path/filepath"
)

// Handle display and exit of process on error.
func HandleErr(e error) {
	fmt.Println(e)
	os.Exit(1)
}

// Output additional file info.
func Verbose(fp string) {
	RootDir := filepath.Dir(fp)
	FileBase := filepath.Base(fp)
	fmt.Printf("Filepath: %s\nRoot Dir: %s\nBase: %s\n", fp, RootDir, FileBase)
}

// Retrieve map keys
func GetMapKeys(m map[interface{}]interface{}) (output []interface{}) {
	for element := range m {
		output = append(output, element)
	}
	return
}
