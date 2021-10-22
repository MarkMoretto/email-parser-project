package tarfile

import (
	"archive/tar"
	"compress/gzip"
	"fmt"
	"io"
	p "moretto/goapi/parse"
	u "moretto/goapi/utils"
	// "bytes"
	"os"
	// "compress/gzip"
)

type worker struct {
	osf *os.File
	err error
	trf *tar.Reader
	hdr *tar.Header
	gzf *gzip.Reader
}

// Set os.File worker object.
func (w *worker) makeFileObj(fp string) {
	w.osf, w.err = os.Open(fp)
	if w.err != nil {
		u.HandleErr(w.err)
	}
}

// Set gzip worker object.
func (w *worker) unleashGzip() {
	w.gzf, w.err = gzip.NewReader(w.osf)
	if w.err != nil {
		u.HandleErr(w.err)
	}
}

// Set tarfile worker object.
func (w *worker) unleashTar() {
	w.trf = tar.NewReader(w.gzf)
}

func GetTarInfo(tarFilePath string) {

	wrkr := worker{}

	wrkr.makeFileObj(tarFilePath)
	defer wrkr.osf.Close()

	wrkr.unleashGzip()
	wrkr.unleashTar()

	// DEBUG: Only iterate through n number
	// of emails.
	var sampleCount int = 2
	var i int = 0
	for i < sampleCount {
		hdr, err := wrkr.trf.Next()

		if err == io.EOF {
			break
		} else if err != nil {
			u.HandleErr(err)
		}

		// Check file type and handle accordingly.
		switch hdr.Typeflag {
		case tar.TypeDir: // = directory
			continue
		case tar.TypeReg: // = regular file
			fileData := make([]byte, hdr.Size)
			_, err := wrkr.trf.Read(fileData)
			if err != nil {
				u.HandleErr(err)
			}
			fmt.Printf("Name: %s\n\n", hdr.Name)
			p.PrintMatches(fileData)
			// os.Stdout.Write(fileData)
		default: // = unknown type
			fmt.Printf("Unable to determine type %c in file %s\n", hdr.Typeflag, hdr.Name)
		}
		i++

	}
}
