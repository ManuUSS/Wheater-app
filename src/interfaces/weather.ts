export interface WeatherResponse {
    location: Location;
    current:  Current;
}

export interface Current {
    temp_c:             number;
    temp_f:             number;
    is_day:             number;
    condition:          Condition;
    wind_kph:           number;
    wind_dir:           string;
    precip_mm:          number;
    humidity:           number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Location {
    name:            string;
    region:          string;
    country:         string;
}
