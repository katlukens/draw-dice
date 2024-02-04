package main

import (
	"net/http"
	"testing"

	"github.com/stretchr/testify/require"
)

// TODO setup this test properly
func TestMain(t *testing.T) {
	t.Log("Testing main")
	http.HandleFunc("/", serveHome)
	http.ListenAndServe(":8080", nil)
	r, err := http.Get("http://localhost:8080")
	require.NoError(t, err)
	require.Equal(t, 200, r.StatusCode)
	t.Log("Test passed")
}
