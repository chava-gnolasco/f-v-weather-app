export interface GeolocationInfo {
  location: Location;
  current: Current;
}

export interface Current {
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: Condition;
  wind_kph: number;
  feelslike_c: number;
  humidity: number;
}

export interface Condition {
  text: string;
  icon: string;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  tz_id: string;
  localtime: string;
}
