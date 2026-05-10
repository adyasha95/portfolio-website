/**
 * useGitHubRepos — live GitHub repo data with 5-minute in-memory cache.
 * New repos pushed to github.com/adyasha-khuntia will appear automatically
 * the next time the page is loaded (or after the cache window expires).
 */
import { useState, useEffect } from "react";

const CACHE_KEY = "gh_repos_cache";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCached() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts < CACHE_TTL) return data;
  } catch (_) {}
  return null;
}

function setCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch (_) {}
}

export function useGitHubRepos(username = "adyasha-khuntia", perPage = 20) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetch_() {
      const cached = getCached();
      if (cached) {
        setRepos(cached);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=${perPage}`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = await res.json();

        // Filter out forks, sort by stars then updated
        const sorted = data
          .filter((r) => !r.fork)
          .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)));

        if (!cancelled) {
          setCache(sorted);
          setRepos(sorted);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetch_();
    return () => { cancelled = true; };
  }, [username, perPage]);

  return { repos, loading, error };
}
