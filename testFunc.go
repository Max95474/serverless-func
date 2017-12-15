package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args[1:]

	fmt.Printf("param1: %s, param2: %s", args[0], args[1])
}
