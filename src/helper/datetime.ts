import { DateTime } from "luxon";

/**
 * Format date string
 * @param inputdate ISO Date Input
 * @param format Format
 * @returns string
 */
export function formatDate(
  inputdate: string,
  format: string = "hh:mm a, d LLL yyyy"
): string {
  const date = DateTime.fromISO(inputdate);

  if (date.isValid) {
    return date.toFormat(format);
  }

  return "";
}
