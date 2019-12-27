export interface Tour {
  id: string;
  title: string;
  date: Date;
  bars: Bar[];
}

export interface Bar {
  id: number;
  title: string;
  checked?: boolean;
  location?: string;
}

export interface StoredTourBar {
  tourId: string;
  barId: number;
  checked: boolean;
}
