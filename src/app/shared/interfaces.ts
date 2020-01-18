export interface RoverCamera {
  abbreviation?: string;
  camera?: string;
  curiosity?: boolean;
  opportunity?: boolean;
  spirit?: boolean;
}

export interface NASAPhoto {
  id?: number;
  sol?: number;
  camera?: {
    id?: number;
    name?: string;
    rover_id?: number;
    full_name?: string;
  };
  img_src?: string;
  earth_date?: string;
  rover?: {
    id?: number;
    name?: string;
    landing_date?: string;
    launch_date?: string;
    status?: string;
    max_sol?: number;
    max_date?: string;
    total_photos?: number;
    cameras?: Array<{
      name?: string;
      full_name?: string;
    }>;
  };
}

export interface Pagination {
  totalItems?: number;
  currentPage?: number;
  pageSize?: number;
  totalPages?: number;
  startPage?: number;
  endPage?: number;
  startIndex?: number;
  endIndex?: number;
  pages?: number[];
}
