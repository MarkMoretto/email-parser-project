package tarfile

import (
	"archive/tar"
	"compress/gzip"
	"fmt"
	"io"
	"log"
	p "moretto/goapi/parse"
	u "moretto/goapi/utils"
	"os"
)

type EmailMessage struct {
	Id        int    `json:"id"`
	To        string `json:"to"`
	From      string `json:"from"`
	Date      string `json:"date"`
	Subject   string `json:"subject"`
	MessageId string `json:"messageId"`
}

type EmailMessages struct {
	Messages []EmailMessage `json:"messages"`
}

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
func (w *worker) getTarInstance() {
	w.trf = tar.NewReader(w.gzf)
}

func GetTarfileData(tarFilePath string) EmailMessages {
	wrkr := worker{}
	messageData := EmailMessages{}

	wrkr.makeFileObj(tarFilePath)
	defer wrkr.osf.Close()

	wrkr.unleashGzip()

	wrkr.getTarInstance()

	var i int = 0
	for {
		hdr, err := wrkr.trf.Next()

		if err == io.EOF {
			break
		} else if err != nil {
			log.Fatal(err)
		}

		// Check file type and handle accordingly.
		switch hdr.Typeflag {
		case tar.TypeDir: // = directory
			continue
		case tar.TypeReg: // = regular file
			fileData := make([]byte, hdr.Size)
			_, err := wrkr.trf.Read(fileData)
			if err != nil {
				log.Fatal(err)
			}
			// fmt.Printf("Name: %s\n\n", hdr.Name)
			// p.PrintMatches(fileData)
			tmpMap := p.GetMatches(fileData)
			mapKeys := p.GetTokenList()

			msg := &EmailMessage{
				Id:        i,
				To:        tmpMap[(*mapKeys)[0]],
				From:      tmpMap[(*mapKeys)[1]],
				Date:      tmpMap[(*mapKeys)[2]],
				Subject:   tmpMap[(*mapKeys)[3]],
				MessageId: tmpMap[(*mapKeys)[4]],
			}
			messageData.Messages = append(messageData.Messages, *msg)

		default: // = unknown type
			fmt.Printf("Unable to determine type %c in file %s\n", hdr.Typeflag, hdr.Name)
		}
		i++
	}
	return messageData
}

// Return sample data for data set
// func GetTarInfo(tarFilePath string) {

// 	wrkr := worker{}

// 	wrkr.makeFileObj(tarFilePath)
// 	defer wrkr.osf.Close()

// 	wrkr.unleashGzip()
// 	wrkr.getTarInstance()

// 	// DEBUG: Only iterate through n number
// 	// of emails.
// 	var sampleCount int = 2
// 	var i int = 0
// 	for i < sampleCount {
// 		hdr, err := wrkr.trf.Next()

// 		if err == io.EOF {
// 			break
// 		} else if err != nil {
// 			u.HandleErr(err)
// 		}

// 		// Check file type and handle accordingly.
// 		switch hdr.Typeflag {
// 		case tar.TypeDir: // = directory
// 			continue
// 		case tar.TypeReg: // = regular file
// 			fileData := make([]byte, hdr.Size)
// 			_, err := wrkr.trf.Read(fileData)
// 			if err != nil {
// 				u.HandleErr(err)
// 			}
// 			fmt.Printf("Name: %s\n\n", hdr.Name)
// 			p.PrintMatches(fileData)
// 			// os.Stdout.Write(fileData)
// 		default: // = unknown type
// 			fmt.Printf("Unable to determine type %c in file %s\n", hdr.Typeflag, hdr.Name)
// 		}
// 		i++

// 	}
// }
