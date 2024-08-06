"use client";
import { useState, useEffect } from "react";
import { ResultFilterTypes } from "../types/filters";

export default function useFetch(url: string) {
  const [result, setResult] = useState<ResultFilterTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { result, loading, error };
}
