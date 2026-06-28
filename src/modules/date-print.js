import { format } from "date-fns";

export function printDate() {
  const today = format(new Date(), "yyyy/MM/dd");
  return today;
}
