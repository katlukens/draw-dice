package main

import (
	"embed"
	"fmt"
	"log/slog"
	"net/http"
	"os"
)

//go:embed static
var files embed.FS

var defaultPort string = "8080"

func main() {
	http.HandleFunc("/", serveHome)
	http.Handle("/static/", http.FileServer(http.FS(files)))

	port, set := os.LookupEnv("PORT")
	if set {
		slog.Info("Using port from env", "port", port)
	} else {
		slog.Info("Using default port", "port", defaultPort)
		port = defaultPort
	}
	port = fmt.Sprintf(":%v", port)
	slog.Info("Server started", "port", port)
	http.ListenAndServe(port, nil)
}

func serveHome(w http.ResponseWriter, r *http.Request) {
	// read index from embed.FS
	index, err := files.ReadFile("static/index.html")
	if err != nil {
		slog.Error("Error reading index.html: %w", err)
		http.Error(w, "Error reading index.html", http.StatusInternalServerError)
		return
	}

	_, err = w.Write(index)
	if err != nil {
		slog.Error("Error writing index.html: %w", err)
		http.Error(w, "Error writing index.html", http.StatusInternalServerError)
	}
	slog.Info("html successfully served\n")
}
