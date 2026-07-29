// Generic user-facing error messages with detailed server-side logging.
// Never expose raw error.message from Supabase/Postgres to end users.

const AUTH_ERROR_MAP: Record<string, string> = {
  "Invalid login credentials": "Invalid email or password.",
  "Email not confirmed": "Please verify your email address before signing in.",
  "User already registered": "An account with this email already exists.",
  "Password should be at least 6 characters.":
    "Password should be at least 6 characters.",
  "New password should be different from the old password.":
    "Please choose a password different from your current one.",
};

export function handleAuthError(error: unknown): string {
  // eslint-disable-next-line no-console
  console.error("[Auth Error]", error);
  const message =
    typeof error === "object" && error !== null && "message" in error
      ? String((error as { message: unknown }).message ?? "")
      : "";
  return AUTH_ERROR_MAP[message] || "Authentication failed. Please try again.";
}

export function handleDatabaseError(
  error: unknown,
  operation = "request",
): string {
  // eslint-disable-next-line no-console
  console.error(`[Database Error - ${operation}]`, error);
  return `Unable to complete ${operation}. Please try again later.`;
}

export function handleUploadError(error: unknown): string {
  // eslint-disable-next-line no-console
  console.error("[Upload Error]", error);
  return "We couldn't upload that file. Please try a different image.";
}
