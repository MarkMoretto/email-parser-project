package tarfile

import (
	"archive/tar"
	"fmt"
	"io"
	"log"

	// "bytes"
	"os"
	// "compress/gzip"
)

var (
	tr *tar.Reader
)

func GetTarInfo(tarFilePath string) {
	reader, err := os.Open(tarFilePath)
	if err != nil {
		log.Fatal(err)
	}
	defer reader.Close()
	tr = tar.NewReader(reader)

	for {
		hdr, err := tr.Next()
		if err == io.EOF {
			break
		} else if err != nil {
			log.Fatal(err)
		}
		headerInfo := hdr.FileInfo()
		fileName := headerInfo.Name()
		fmt.Printf("Tarfile filename: %s", fileName)

	}
}
