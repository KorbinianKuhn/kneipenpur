export interface Tour {
  id: string;
  title: string;
  date: Date;
  invitation?: string;
  bars: Bar[];
}

export interface Bar {
  id: number;
  title: string;
  checked?: boolean;
  location?: string;
  rating?: number;
}

export interface StoredTourBar {
  tourId: string;
  barId: number;
  checked: boolean;
  rating: number;
}
