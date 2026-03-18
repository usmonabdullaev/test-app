export interface FilterDto {
  page?: number;
  limit?: number;
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
}

export interface MetaDto {
  total_items: number;
  total_pages: number;
}
