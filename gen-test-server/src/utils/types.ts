export type CreateEntityType = {
  access_token: string;
  base_domain: string;
  entity: string;
};

export type TokenResponse = {
  access_token: string;
  base_domain: string;
};

export type PostResponse = {
  id: number;
  request_id: string;
};
