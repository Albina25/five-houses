export interface IOrder {
  id: number;
  user_id: number;
  house_id: number;
  count_guests: number;
  date_start: string;
  date_end: string;
  price_total: string;
  status: number;
  payment_status: number;
  comment: string;
  created_at: string;
}
