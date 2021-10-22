package parse

import (
	"fmt"
	"regexp"
)

type Token string
type Tokens []Token

// Email target values to use in regex patterns.
func tokenList() *Tokens {
	return &Tokens{"To", "From", "Date", "Subject", "Message-ID"}
}

// Create regular expression pattern with desired
// target value
func rePattern(t Token) string {
	return fmt.Sprintf(`(?i)(?:%s:\s*)(.+)`, t)
}

// Print matches to stdout
//!TODO: Return matches function.
func PrintMatches(d []byte) {
	tokens := tokenList()
	for _, token := range *tokens {
		ptrn := rePattern(token)
		p := regexp.MustCompile(ptrn)
		// smatch := p.Find(d)
		// fmt.Printf("%s\n", smatch)

		m2 := p.FindStringSubmatch(string(d))
		fmt.Printf("%s - %s\n", token, m2[1])

	}

}
