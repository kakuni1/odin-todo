import { format } from "date-fns";

/**
 * @returns {string}
 */
export function printDate() {
  const today = format(new Date(), "MM/dd/yyyy");
  return today;
}
