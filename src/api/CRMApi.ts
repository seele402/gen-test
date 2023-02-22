import type { AuthResponse } from '@/types/AuthResponse';
import type { PostResponse } from '@/types/PostResponse';
import axios from 'axios';

export const getAPIToken = async (): Promise<AuthResponse> => {
  return await axios.get('http://localhost:3000')
  .then(response => response.data)
};

export const addEntity = async (
  access_token: string, 
  base_domain: string, 
  entity: string
  ): Promise<PostResponse> => {
  return await axios.post('http://localhost:3000/create', { 
    access_token,
    base_domain,
    entity,
 })
  .then(response => response.data)
}

