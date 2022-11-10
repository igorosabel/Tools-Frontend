export interface ToolListItem {
  url: string;
  name: string;
}

export interface UserAgentInterface {
  id: number;
  device: string;
  useragent: string;
  date: string;
}

export interface UserAgentResult {
  list: UserAgentInterface[];
}
