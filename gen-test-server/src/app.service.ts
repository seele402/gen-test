import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CreateEntityType } from './utils/types';

interface TokenResponse {
  access_token: string;
  base_domain: string;
}

interface PostResponse {
  id: number;
  request_id: string;
}

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getToken(): Promise<AxiosResponse<TokenResponse>> {
    return this.httpService.axiosRef
      .get('https://test.gnzs.ru/oauth/get-token.php', {
        headers: { 'X-Client-Id': 30878566 },
      })
      .then((response) => response.data);
  }

  createEntity(
    postData: CreateEntityType,
  ): Promise<AxiosResponse<PostResponse>> {
    return this.httpService.axiosRef
      .post(
        `https://${postData.base_domain}/api/v4/${postData.entity}`,
        { data: {} },
        {
          headers: { Authorization: `Bearer ${postData.access_token}` },
        },
      )
      .then((response) => response.data);
  }
}
