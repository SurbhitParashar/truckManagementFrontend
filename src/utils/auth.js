// frontend/src/utils/auth.js

export async function fetchUserFromCookie() {
  try {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      credentials: "include", // Sends cookies
    });

    if (!res.ok) throw new Error("Not authenticated");

    const data = await res.json();
    return data; 
  } catch (err) {
    console.error("Failed to fetch user:", err);
    return null;
  }
}
