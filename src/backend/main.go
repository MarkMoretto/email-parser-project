package main

import (
	"fmt"
	// "io/fs"
	// "log"
	// "os"
	ttar "moretto/goapi/tarfile"
	"path/filepath"
)

func main() {
	TarFilePath := "data\\sampleEmails.tar.gz"
	RootDir := filepath.Dir(TarFilePath)
	FileBase := filepath.Base(TarFilePath)
	fmt.Printf("Filepath: %s\nRoot Dir: %s\nBase: %s\n", TarFilePath, RootDir, FileBase)
	ttar.GetTarInfo(TarFilePath)
}
