A simple Node.js Express service backed by MongoDB that fetches user data via GET /users/:id only for users older than 21.

It validates the ObjectId format and returns clear HTTP errors for invalid IDs, not-found users, or under-age cases.
