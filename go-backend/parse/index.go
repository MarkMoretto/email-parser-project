package parse

import (
	"fmt"
	"regexp"
)

type Token string
type Tokens []Token
type TokenMap map[Token]string

// Email target values to use in regex patterns.
func GetTokenList() *Tokens {
	return &Tokens{"To", "From", "Date", "Subject", "Message-ID"}
}

// Create regular expression pattern with desired
// target value
func rePattern(t Token) string {
	return fmt.Sprintf(`(?i)(?:%s:\s*)(.+)`, t)
}

// Print matches to stdout
//!TODO: Return matches function.
func GetMatches(d []byte) TokenMap {
	tokens := GetTokenList()
	outmap := make(TokenMap)

	for _, token := range *tokens {
		ptrn := rePattern(token)
		p := regexp.MustCompile(ptrn)
		// smatch := p.Find(d)
		// fmt.Printf("%s\n", smatch)

		m2 := p.FindStringSubmatch(string(d))
		outmap[token] = m2[1]
	}
	return outmap
}

// Print matches to stdout
//!TODO: Return matches function.
func PrintMatches(d []byte) {
	tokens := GetTokenList()
	for _, token := range *tokens {
		ptrn := rePattern(token)
		p := regexp.MustCompile(ptrn)
		// smatch := p.Find(d)
		// fmt.Printf("%s\n", smatch)

		m2 := p.FindStringSubmatch(string(d))
		fmt.Printf("%s - %s\n", token, m2[1])
	}
}
