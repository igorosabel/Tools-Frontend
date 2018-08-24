export interface UserAgent {
  id: number;
  device: string;
  useragent: string;
  date: string;
}

export interface UserAgentResult {
  list: UserAgent[];
}