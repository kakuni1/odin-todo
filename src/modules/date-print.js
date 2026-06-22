import { format } from "date-fns";

export function printDate() {
  const today = format(new Date(), "MM/dd/yyyy");
  return today;
}
